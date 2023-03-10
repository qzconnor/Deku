import commands from "../../commands"
import { Command } from "../../types"
import { EditReply, event, Reply } from "../../utils"

const allCommands = commands.map(({commands}) => commands).flat()
const allCommandMap = new Map<string, Command>(
    allCommands.map(c => [c.meta.name, c])
)


export default event('interactionCreate', async ({log, client}, interaction) => {
    if(!interaction.isAutocomplete()) return
    try {
        const commandName = interaction.commandName
        const command = allCommandMap.get(commandName)
    
        if(!command) throw new Error("Command not found...")
        if(!command.autocomplete) return
    
        return await command.autocomplete({
            client,
            interaction,
            log(...args) {
                log(`[AutoComplete > ${command.meta.name}]`, ...args)
            }
        })
    


    } catch(error) {
        log(`[Command Error]`, error)
    }

})
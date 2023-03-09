import { EditReply, event, Reply, readId } from "../../utils"


export default event('interactionCreate', async ({log, client}, interaction) => {
    if(!interaction.isButton()) return
    try {
        const buttonId = interaction.customId
        console.log(readId(buttonId))
        

    
    } catch(error) {
        log(`[Button Error]`, error)
        if(interaction.deferred)
            return interaction.editReply(
                EditReply.error('Something went wrong :(')
            )
        return await interaction.reply(
            Reply.error('Something went wrong :(')
        )
    }

})

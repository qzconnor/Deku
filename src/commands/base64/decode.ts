import { SlashCommandBuilder } from 'discord.js'
import { command, Reply} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('deocde')
    .setDescription('decode base64')
    .addStringOption(
        option => option
            .setName('text')
            .setDescription('base64 to decode')
            .setRequired(true)
    )
    

export default command(meta, ({interaction}) => {
   const text = interaction.options.getString('text')

   if(!text) return interaction.reply(
         Reply.error('You must provide text to encode')
    )

    const decoded = Buffer.from(text, 'base64').toString('utf-8')

    return interaction.reply(
        Reply.success(`\`\`\`${decoded}\`\`\``)
    )
})
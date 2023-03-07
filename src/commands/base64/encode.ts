import { SlashCommandBuilder } from 'discord.js'
import { command, Reply} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('encode')
    .setDescription('encode base64')
    .addStringOption(
        option => option
            .setName('text')
            .setDescription('text to encode')
            .setRequired(true)
    )
    

export default command(meta, ({interaction, log}) => {
   const text = interaction.options.getString('text')

   if(!text) return interaction.reply(
         Reply.error('You must provide text to encode')
    )

    const encoded = Buffer.from(text).toString('base64')

    return interaction.reply(
        Reply.success(`\`\`\`${encoded}\`\`\``)
    )
})
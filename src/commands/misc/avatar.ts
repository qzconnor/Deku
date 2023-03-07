import { SlashCommandBuilder } from 'discord.js'
import { command, Reply} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Display a users Avatar!')
    .addUserOption(option => 
        option.setName("target")
            .setDescription("Target User")
            .setRequired(true)
    )

export default command(meta, ({interaction}) => {
    const user = interaction.options.get("target");
    if(!user?.user) return interaction.reply(
        Reply.error('User not found!')
    )

    return interaction.reply(
        Reply.avatar(
            user?.user
        )
    )
})
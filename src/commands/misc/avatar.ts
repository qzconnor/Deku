import { GuildMember, SlashCommandBuilder } from 'discord.js'
import { Reply, command} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Display a users Avatar!')
    .addSubcommand(subcommand => 
        subcommand.setName('user')
        .setDescription('Display a users Avatar!')
        .addUserOption(option =>
            option.setName('target')
            .setDescription('The user to display the avatar of')
            .setRequired(true)
    ))
    .addSubcommand(subcommand => 
        subcommand.setName('member')
        .setDescription('Display a members Avatar!')
        .addUserOption(option =>
            option.setName('target')
            .setDescription('The user to display the avatar of')
            .setRequired(true)
    ))
    

export default command(meta, ({interaction}) => {
    
    switch(interaction.options.getSubcommand()) {
        case 'user': 
            const user = interaction.options.get("target");
            if(!user?.user) return interaction.reply(
                Reply.error('User not found!')
            )
            return interaction.reply(
                Reply.avatar(
                    user?.user
                )
            )
        case 'member': 
            const member = interaction.options.getMember("target") as GuildMember;
            if(!member) return interaction.reply(
                Reply.error('Member not found!')
            )
            return interaction.reply(
                Reply.avatar(member)
            )
        default:
            return interaction.reply(
                Reply.error('Invalid subcommand!')
            )
    }

    
})

// GuildID | UserID | BannerID
//https://cdn.discordapp.com/guilds/728042667723849850/users/299976373353578496/banners/9142de40d6b6b2174d29bf0e6110371a.png?size=480

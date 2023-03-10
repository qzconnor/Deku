import { GuildMember, SlashCommandBuilder } from 'discord.js'
import { Reply, command} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or member!')
    .addStringOption(
        option => 
            option.setName('target')
            .setDescription('The user to get info about')
            .setAutocomplete(true)
    )
    

export default command(meta, ({interaction, client}) => {
    interaction.reply(Reply.error('This command is currently disabled!'))
}, async ({interaction, log}) => {

    const focusedValue = interaction.options.getFocused();
    const choices = ['Popular Topics: Threads', 'Sharding: Getting started', 'Library: Voice Connections', 'Interactions: Replying to slash commands', 'Popular Topics: Embed preview'];
    const filtered = choices.filter(choice => choice.startsWith(focusedValue));
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
    );

    log(`Trying to autocomplete...`)
})
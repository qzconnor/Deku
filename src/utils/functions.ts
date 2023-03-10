import { GuildMember, ImageSize } from 'discord.js'
export function getUserGuildBanner(member: GuildMember, size: ImageSize): string | null {
    if(!member.guild.banner) return null

    return ``


    //return `https://cdn.discordapp.com/guilds/${member.guild.id}/users/${member.id}/banners/${member.guild.banner}.png?size=${size}`
    //https://cdn.discordapp.com/banners/299976373353578496/a_b81e60045d4bf994a92aa009d4fd88d6.png?size=480
}
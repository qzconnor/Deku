import {
    InteractionReplyOptions,
    WebhookEditMessageOptions,
    User,
    GuildMember,
} from 'discord.js'

export const Colors = {
    error: 0xf54242,
    success: 0x00ff59,
    accent: 0x007550
}

export const Reply = {
    error:(msg: string): InteractionReplyOptions => {
        return {
            ephemeral: true,
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    },
    avatar:(user: User | GuildMember): InteractionReplyOptions => {
        const name = user instanceof GuildMember ? user.nickname ? user.nickname : user.displayName : user.username;

        return {
            ephemeral: true,
            embeds: [{
                color: Colors.accent,
                title: `${name}\'s Avatar:`,
                image: {
                    url: user.displayAvatarURL({
                        size: 256
                    })
                }
            }]
        }
    },
    success:(msg: string): InteractionReplyOptions => {
        return {
            ephemeral: true,
            embeds: [{
                color: Colors.success,
                description: msg
            }]
        }
    },
}

export const EditReply = {
    error:(msg: string): WebhookEditMessageOptions => {
        return {
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}
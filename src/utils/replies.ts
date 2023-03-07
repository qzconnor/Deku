import {
    InteractionReplyOptions,
    WebhookEditMessageOptions,
    User
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
    avatar:(user: User): InteractionReplyOptions => {
        return {
            ephemeral: true,
            embeds: [{
                color: Colors.accent,
                title: `${user.username}\'s Avatar:`,
                image: {
                    url: user.displayAvatarURL({
                        size: 256
                    })
                }
            }]
        }
    }
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
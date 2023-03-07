import { Client, GatewayIntentBits } from 'discord.js'
import { registerEvents } from '../utils'
import evnets from '../events'
import keys from "../keys"
import { connect } from 'mongoose'


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
})

connect(keys.mongoURI, {}).then(() => {
    console.log('[MongoDB] Connected!')
})


registerEvents(client, evnets)

client.login(keys.clientToken)
    .catch(err => {
        console.error('[Login Error]', err)
        process.exit(1)
    })
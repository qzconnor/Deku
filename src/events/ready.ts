import { event } from "../utils";
import { Collection, OAuth2Guild } from 'discord.js'
import Guild from '../models/guild'
import { LoggerFunction } from "../types";

export default event('ready', async ({log}, client) => {
    log(`Logged in as ${client.user.tag}`)
    try {
        await syncGuildsWithDatabase(log, await client.guilds.fetch())
    } catch (error) {
        log(`Error syncing guilds with database!`, error)
    }
})

async function syncGuildsWithDatabase(log: LoggerFunction, guilds: Collection<string, OAuth2Guild>) {
    guilds.forEach(async guild => {
        const exist = await Guild.exists({guildId: guild.id});

        if(!exist){
            await Guild.create({
                guildId: guild.id
            })

            log(`Successfully created missing guild in database! (${guild.name})`)
        }
    })
    const dbGuilds = await Guild.find({})
    dbGuilds.forEach(async guild => {
        if(!guilds.has(guild.guildId)){
            await Guild.deleteOne({guildId: guild.guildId})
            log(`Successfully deleted guild from database! (${guild.guildId})`)
        }

    })
}
import {event} from "../utils";
import GuildModel from "../models/guild";

export default event("guildCreate", ({log, client}, guild) => {
    const guildModel = new GuildModel({
        guildId: guild.id,
    })
    guildModel.save()
    log(`Joined guild ${guild.name}`)
})
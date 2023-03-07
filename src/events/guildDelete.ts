import {event} from "../utils";
import GuildModel from "../models/guild";

export default event("guildDelete", async ({log, client}, guild) => {
    await GuildModel.deleteOne({guildId: guild.id})
    log(`Leaved guild ${guild.name}`)
})
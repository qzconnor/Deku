import { Event } from "../types"
import ready from './ready'
import interactionCreate from './interactionCreate'
import guildCreate from './guildCreate'
import guildDelete from './guildDelete'

const events: Event<any>[] = [
    ready,
    interactionCreate,
    guildCreate,
    guildDelete
]

export default events
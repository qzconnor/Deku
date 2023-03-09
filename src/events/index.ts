import { Event } from "../types"
import ready from './ready'
import interactionCreate from './interactionCreate'
import guildCreate from './guildCreate'
import guildDelete from './guildDelete'

const events: Event<any>[] = [
    ...interactionCreate,
    ready,
    guildCreate,
    guildDelete
]

export default events
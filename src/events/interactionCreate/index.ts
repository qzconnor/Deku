import { Event } from "../../types"
import commands from './commands'
import autocomplete from './autocomplete'

const events: Event<any>[] = [
    commands, autocomplete
]

export default events
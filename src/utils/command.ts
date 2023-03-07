import {
    Command,
    CommandCaregory,
    CommandExec,
    CommandMeta
} from '../types'

export function command(meta: CommandMeta, exec: CommandExec): Command {
    return {
        meta,
        exec
    }
}

export function category(name: string, commands: Command[]): CommandCaregory {
    return {
        name,
        commands
    }
}
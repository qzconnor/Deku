import {
    Command,
    CommandCategory,
    CommandCategoryExtra,
    CommandExec,
    CommandMeta,
    CommandAutocomplete
} from '../types'

export function command(meta: CommandMeta, exec: CommandExec, autocomplete: CommandAutocomplete | undefined = undefined): Command {
    return {
        meta,
        exec,
        autocomplete
    }
}

export function category(name: string, commands: Command[], extra: CommandCategoryExtra = {}): CommandCategory {
    return {
        name,
        commands,
        ...extra
    }
}
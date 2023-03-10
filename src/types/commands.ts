import {
    Awaitable,
    Client,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    AutocompleteInteraction
} from 'discord.js'
import { LoggerFunction } from '../types'

export interface CommandProps {
    interaction: ChatInputCommandInteraction
    client: Client
    log: LoggerFunction
}

export interface AutoCompleteProps {
    interaction: AutocompleteInteraction
    client: Client
    log: LoggerFunction
}

export type CommandExec = 
    (props: CommandProps) => Awaitable<unknown>

export type CommandAutocomplete = 
    (props: AutoCompleteProps) => Awaitable<unknown>

export type CommandMeta = SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">



export interface Command {
    meta: CommandMeta,
    exec: CommandExec,
    autocomplete?: CommandAutocomplete
}

export interface CommandCategoryExtra {
    description?: string,
    emoji?: string
}

export interface CommandCategory extends CommandCategoryExtra {
    name: string,
    commands: Command[]
}
import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export interface Command {
  name: string;
  permission: boolean;
  data:
    | Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>
    | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<any>;
}

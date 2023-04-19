import type { CommandOptions } from '#lib/interfaces';
import { SlashCommand } from '#lib/structures';
import { ApplyOptions } from '@sapphire/decorators';
import { ApplicationCommandRegistry } from '@sapphire/framework';
import type { ChatInputCommandInteraction } from 'discord.js';

@ApplyOptions<CommandOptions>({
	description: 'ping pong'
})
export class UserCommand extends SlashCommand {
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand({
			name: this.name,
			description: this.description
		});
	}

	public async chatInputRun(interaction: ChatInputCommandInteraction) {
		await interaction.reply('pong');
	}
}

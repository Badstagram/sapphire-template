import { SapphireClient } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';

export class BotClient extends SapphireClient {
	constructor(opts: ClientOptions) {
		super(opts);
	}
}

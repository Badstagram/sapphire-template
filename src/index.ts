import './lib/setup';
import { LogLevel } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { BotClient } from '#lib/structures';
import { envParseString } from '@skyra/env-utilities';

const client = new BotClient({
	caseInsensitiveCommands: true,
	logger: {
		level: envParseString('NODE_ENV') === 'development' ? LogLevel.Debug : LogLevel.Info
	},
	intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
	loadMessageCommandListeners: true
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();

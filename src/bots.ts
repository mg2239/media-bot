/**
 * Sets up bots and handles file downloading.
 */

import discord from 'discord.js';
import constants from './constants';

const client = new discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user!.tag}!`));

export const setupDiscord = () => client.login(constants.DISCORD_TOKEN);

import dotenv from 'dotenv';
import discord from 'discord.js';

const client = new discord.Client();

dotenv.config();

client.on('ready', () => console.log(`Logged in as ${client.user!.tag}!`));

client.login(process.env.BOT_TOKEN);

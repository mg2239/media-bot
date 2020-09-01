import dotenv from 'dotenv';

dotenv.config();

export default {
  API_KEY: process.env.API_KEY,
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
};

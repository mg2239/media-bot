/**
 * Main entrypoint for app.
 */

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import constants from './constants';

const bytes = fs.readFileSync(path.join(__dirname, 'audio', 'voice.raw'));

const b64 = bytes.toString('base64');

axios({
  method: 'POST',
  url: 'https://shazam.p.rapidapi.com/songs/detect',
  headers: {
    'content-type': 'text/plain',
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': constants.API_KEY,
    useQueryString: true,
  },
  data: b64,
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(`Error ${error.response.status}: ${error.response.statusText}`);
  });

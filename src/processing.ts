/**
 * Handles converting audio to PCM.
 */

import fs from 'fs';

function readFile(path: string) {
  const ac = new AudioContext();
  return ac
    .decodeAudioData(fs.readFileSync(path))
    .then((ab) => ab)
    .catch((err) => console.log(err));
}

export default (path: string) => {
  readFile(path).then((res) => {
    if (res) {
    }
  });
};

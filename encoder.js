const lame = require('lame');
const audio = require('osx-audio');

// create the Encoder instance
var encoder = new lame.Encoder({
  // input
  channels: 2,        // 2 channels (left and right)
  bitDepth: 16,       // 16-bit samples
  sampleRate: 44100,  // 44,100 Hz sample rate

  // output
  bitRate: options.bitrate,
  outSampleRate: options.samplerate,
  mode: (options.mono ? lame.MONO : lame.STEREO) // STEREO (default), JOINTSTEREO, DUALCHANNEL or MONO
});

var input = new audio.Input();

input.pipe(encoder);

module.exports = encoder;

// microphone-processor.js
class MicrophoneProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];

    for (let channel = 0; channel < output.length; ++channel) {
      for (let i = 0; i < input[channel].length; ++i) {
        output[channel][i] = input[channel][i];
      }
    }

    this.port.postMessage(input[0]);
    return true;
  }
}

registerProcessor('microphone-processor', MicrophoneProcessor);

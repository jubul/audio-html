// microphone-processor.js
class MicrophoneProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        const input = inputs[0];
        const output = outputs[0];

        if (!input || input.length === 0 || !input[0]) {
            return true;
        }

        const microphoneOutputBuffer = input[0];
        this.port.postMessage(microphoneOutputBuffer);
        return true;
    }
}

registerProcessor('microphone-processor', MicrophoneProcessor);

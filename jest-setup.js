//polyfills for everything to fix the browser compatibility issues (new file addition by me)
//polyfill for TextEncoder/TextDecoder and other Node.js globals
const { TextEncoder, TextDecoder } = require("util");

//set up global polyfills
Object.defineProperty(global, "TextEncoder", {
  value: TextEncoder,
  writable: true
});

Object.defineProperty(global, "TextDecoder", {
  value: TextDecoder,
  writable: true
});

//polyfill for ReadableStream
if (typeof global.ReadableStream === "undefined") {
  const { ReadableStream } = require("stream/web");
  Object.defineProperty(global, "ReadableStream", {
    value: ReadableStream,
    writable: true
  });
}

//polyfill for WritableStream
if (typeof global.WritableStream === "undefined") {
  const { WritableStream } = require("stream/web");
  Object.defineProperty(global, "WritableStream", {
    value: WritableStream,
    writable: true
  });
}

//polyfill for MessagePort
if (typeof global.MessagePort === "undefined") {
  const { MessagePort, MessageChannel } = require("worker_threads");
  Object.defineProperty(global, "MessagePort", {
    value: MessagePort,
    writable: true
  });
  Object.defineProperty(global, "MessageChannel", {
    value: MessageChannel,
    writable: true
  });
}

//additional polyfills for undici/fetch
if (typeof global.fetch === "undefined") {
  global.fetch = require("node-fetch");
}

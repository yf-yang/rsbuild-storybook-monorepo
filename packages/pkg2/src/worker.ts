import assert from "assert";

console.log("Worker started");

self.onmessage = (e: MessageEvent<string>) => {
  assert.ok(true);
  console.log(`Worker received message: ${e.data}`);
};

import assert from "assert";

console.log("pkg1 Worker started");

self.onmessage = (e: MessageEvent<string>) => {
  assert.ok(true);
  console.log(`pkg1 Worker received message: ${e.data}`);
};

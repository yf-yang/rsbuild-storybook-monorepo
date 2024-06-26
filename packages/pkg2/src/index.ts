import assert from "assert";

export function foo() {
  assert.ok(true);
  console.log("foo");
  launchWorker();
}

function launchWorker() {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
  worker.postMessage("Hello from main");
}
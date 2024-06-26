import { foo } from "pkg2";

export function load() {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
  worker.postMessage("Hello from main");
  foo();
}

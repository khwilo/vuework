import Worker from "worker-loader!./worker";
import * as Comlink from "comlink";

const worker = Comlink.wrap(new Worker());

export const toUpperCase = worker.toUpperCase;
export const doHeavyWork = worker.doHeavyWork;

// worker.addEventListener("message", (event) => {
//   console.log("we got back", event);
// });

// export function sendMessage(msg) {
//   worker.postMessage(msg);
// }

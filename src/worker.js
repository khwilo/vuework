import * as Comlink from "comlink";

const fns = {
  /**
   * Transform a String to uppercase
   *
   * @param {String} msg
   * @returns {String} a string converted to upper case format
   */
  toUpperCase: (msg) => {
    return msg.toUpperCase();
  },

  /**
   * Demo: Perform a heavy computation
   *
   * @returns integer value
   */
  doHeavyWork() {
    let i = 0;
    while (i < 9000000000) {
      i++;
    }
    return i;
  },
};

Comlink.expose(fns);

// self.addEventListener("message", (event) => {
//   console.log("worker got: ", event);

//   self.postMessage(event.data.toUpperCase());
// });

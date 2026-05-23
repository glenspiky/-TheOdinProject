const eventEmiter = require("events");

class myCustomEmiter extends eventEmiter {
  constructor() {
    super();
    this.greeting = "hello";
  }
  great(name) {
    this.emit("greeting", `${this.greeting}`, `${name}`);
  }
}
const myCustomEmiter = new myCustomEmiter();

myCustomEmiter.on("greeting", (input) => {
  console.log("Greeting event", input);
});
myCustomEmiter.great("Glen");

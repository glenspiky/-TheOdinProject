const eventEmiter = require("events");

const firstEmiter = new eventEmiter();

//regidter listenner

firstEmiter.on("great", (name) => {
  console.log(`Hello ${name}`);
});
firstEmiter.emit("great", "Glen Barasa");

const name = "Welson";
console.log("welcome, " + name + "! Node is working.");
console.log("Learning web development, one step at a time.");

// Function that builds a greeting string for a given name
function greeet(name) {
  return "Hello, " + name + "!";
}

// List of names to greet
const names = ["Ana", "Bilal", "Chen", "temz"];

// Loop through the names and print a greeting for each one
for (const n of names) {
  console.log(greeet(n));
}
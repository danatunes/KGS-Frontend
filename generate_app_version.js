const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const { forceStdinTty } = require('force-stdin-tty');

let overwroteStdin = false;
try {
    overwroteStdin = forceStdinTty();
} catch {
    console.error('Please push your code in a terminal.');
    process.exit(1);
}

if (overwroteStdin) {
    process.stdin.destroy();
}

rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });
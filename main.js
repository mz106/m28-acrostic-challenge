
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const main = (argv) => {
    const message = argv.message;
    const text = argv.text;

    const messageSplit = message.toLowerCase().split("");
    const textSplit = text.toLowerCase().split(" ");
   
    const arr = [];
    const arr2 = [];

    for (let i = 0; i < messageSplit.length; i++) {
        for (let j = 0; j < textSplit.length; j++) {
            if (textSplit[j].startsWith(messageSplit[i])) {
                arr.push(textSplit[j].split("")[0])
                break
            } else if (textSplit[j].endsWith(messageSplit[i])) {
                arr.push(textSplit[j].split("")[textSplit[j].split("").length-1])
                break
            } else {
                continue
            }
        }
    }
    console.log(arr)

    for (let item of messageSplit) {
        if (item !== " ") {
            arr2.push(item)
        }
    }

    if (arr.join("") === arr2.join("")) {
        console.log("The message lies within")
    } else {
        console.log("No message here")
    }
};

main(argv);

//node main.js --message "Hi Bob" --text "Wigh inimi dfb igloo wewd"
//node main.js --message "bar" --text "And all of the bables fell onto the floor"
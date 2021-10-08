const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const main = (argv) => {
     
    const message = argv.message;
    const text = argv.text;
    
    const messageSplit = message.toLowerCase().trim().split(" ");
    const textSplit = text.toLowerCase().trim().split(" ");
   
    const arr = [];
    const arr2 = [];

    for (let letterMessage of messageSplit) {
        for (let letterText of textSplit){
            console.log("text", letterText.split("")[0])
            console.log("message", letterMessage.split("")[0])
            console.log(letterMessage.split(""), letterMessage.split("")[0])
            if(letterMessage.split("") === " ") {
                continue
            } else if (letterMessage.split("")[0] === letterText.split("")[0]) {
                arr.push(letterText.split("")[0]);
                console.log("arr", arr)
                break
            }
        }  
    }
    
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

//node main.js  --message "Hi Bob" --text "In Bollywood or Broadway, you have to know how to dance"
//node index.js --message "Rick is Great" --text "Recently igloos create kitchens inside small gantrys removed eternly at times"
// node main.js --message "Cups and saucers" --text "Cheese is a frankly awful invention"
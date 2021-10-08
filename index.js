const yargs = require("yargs/yargs");
 const { hideBin } = require("yargs/helpers");
 const argv = yargs(hideBin(process.argv)).argv;

 const main = (argv) => {
     
    const message = argv.message;
    const text = argv.text;
    
    const messageSplit = message.toLowerCase().trim().split("");
    const textSplit = text.toLowerCase().trim().split("");
   
    const arr = [];
    const arr2 = [];

    for (let letterMessage of messageSplit) {
        for (let letterText of textSplit){
            if(letterMessage === " ") {
                continue
            } else if (letterMessage === letterText) {
                arr.push(letterText);
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

//node index.js  --message "Hi Bob" --text "In Bollywood or Broadway, you have to know how to dance"
//node index.js --message "Rick is Great" --text "In recent times, chickens keep gambling rounds absent"
// node index.js --message "Cups and saucers" --text "Cheese is a frankly awful invention"
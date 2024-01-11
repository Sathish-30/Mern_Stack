const readLine = require('readline');

const rl = readLine.createInterface(process.stdin , process.stdout);

rl.question("Enter the string ? ", (str) => {
    let arr= str.split(" ");
    let chArr1 = arr[0].split("");
    let chArr2 = arr[1].split("");
    chArr1.sort();
    chArr2.sort()
    if(JSON.stringify(chArr1) === JSON.stringify(chArr2)){
        console.log("It is a  anagram");
    }else{
        console.log("It is not a anagram")
    }
    rl.close();
})
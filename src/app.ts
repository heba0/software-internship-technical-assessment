import * as readline from 'readline';
import { luhn } from "./algorithm/luhn"
import * as StatusCode from "./utils/const"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = async () => {
    console.log("Please input your credit card number")
    //get input
    const it = rl[Symbol.asyncIterator]();
    let inp = await it.next();
    let creditCardNo = inp.value

    //remove space    
    creditCardNo = creditCardNo.replace(/\s/g, "");

    //check input has only digits
    if (isNaN(Number(creditCardNo))) {
        console.log('Invalid Input: input must be numeric');
        process.exit(StatusCode.FAIL);
    }

    //check input has more than 1 digit
    if (creditCardNo.length <= 1) {
        console.log('Invalid Input: input length must be greater than 1');
        process.exit(StatusCode.FAIL);
    }

    //run luhn algorithm
    if (luhn(creditCardNo)) {
        console.log('Valid Number');
        process.exit(StatusCode.SUCCESS);
    } else {
        console.log('Invalid Number');
        process.exit(StatusCode.FAIL);
    }
}

main();

const argvs = process.argv.slice(2);
/* let sum = 0;
let avg = 0;

if (argvs.length < 3) {
  console.log("enter minimum 3 arguments,first argument string others numbers");
} else {
  for (i = 1; i < argvs.length; i++) {
    if (!(parseInt(argvs[i]).toString().length === argvs[i].length)) {
      console.log(
        `Sorry, the argument ${argvs[i]} is not a number, please try again`
      );
      break;
    }
    sum = sum + parseInt(argvs[i]);
  }
  if (argvs[0] === "sum") {
    console.log(sum);
  } else if (argvs[0] === "avg") {
    avg = sum / (argvs.length - 1);
    console.log(avg);
  } else {
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
  }
}
 */

function parseNum(arg){
    const number = parseInt(arg)
    if(isNaN(number)){
        console.log(`${arg} is not a number`);
        process.exit()
        }
    return number
}

const args = process.argv.slice(2)

const [operation, ...rest] = args

const numbers = rest.map(parseNum) 
console.log(numbers)
/* const operation = args[0]
const numbers = args.slice(1) */


function sum(numArray){
    return numArray.reduce((perval,currVal)=> perval +currVal,0)
}

function avg(numArray){
    return sum(numArray)/numArray.length
}

switch(operation){
    case "sum":
     console.log(sum(numbers));
     break;
     case "avg":
        console.log(avg(numbers));
        break;
        default:
        break;

}

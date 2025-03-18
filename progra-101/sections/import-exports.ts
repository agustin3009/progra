import { addTwoNumbers, 
         timesTwoNumbers, 
         substractTwoNumbers, 
         divideTwoNumbers
} from "../helpers/math-helpers";

//export function greet( name: string = 'Mundo' ) {

//    console.log('Hola', name);
//}

//greet ( 'Agustin' );
 let num1 = 10
 let num2 = 20

let total1: number = addTwoNumbers (num1, num2);
let total2: number = substractTwoNumbers (num1, num2);
let total3: number = timesTwoNumbers (num1, num2);
let total4: number = divideTwoNumbers (num1, num2);

console.log ('Add', total1);
console.log ('Substract', total2);
console.log('Times', total3);
console.log('Divide', total4);

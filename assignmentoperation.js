


const calculate = (num1, num2, operation) => {
        if("ADD"== operation){
             result = num1 + num2 ;
             return result
            
        }
        else if("SUB"== operation){
            return result = num1 - num2 ;
            
        }

        else if("Multiply"== operation){
            return result = num1 * num2 ;
            
        }
        else if("Divide"== operation){
            return result = num1 / num2 ;
            
        }
         else
              return "Operations not found";

}
  
console.log(calculate( 6, 3, "ADD"));
console.log(calculate( 6, 3, "SUB"));
console.log(calculate(6, 3, "Multiply"));
console.log(calculate( 6, 3, "Divide"));
console.log(calculate( 6, 3, "DivideNOthing"));

// // const calculate = (operation, value1, value2) => {
// //     switch (operation){
// //         case "+":
// //             return value1 + value2;
// //             break;
// //         case "-":
// //             return value1 - value2;  
// //         case "*":
// //             return value1 * value2;
// //         case "/":
// //             return value1 / value2;
// //         default:
// //             return "Operation not recognized"   
// //     }
// //   }

//   console.log(calculate("+", 10, 5)); // returns 15
//   console.log(calculate("-", 10, 5)); // returns 5
//   calculate("*", 10, 5); // returns 50
//   calculate("/", 10, 5); // returns 2
//   calculate("^", 10, 5); // returns "Operation not recognized" 
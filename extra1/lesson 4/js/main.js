// 1
// let int = prompt("3 xonali son kiriting")-0


// let hun = Math.floor(int/100)
// let one = int%10
// let tens = (Math.floor(int/10)%10)

// let summ = (hun+one)-tens
// alert(summ)

//2
// let int = prompt("Son kiriting")-0
// let result = 0

// for (let i = 1; i <= int; i++) {
//         if (int % i == 0) {
//             result +=i        
//         }
// }
//     alert(result)

//3
// let arr = [true," Salom" , 23, undefined]
// for(let i =0; i<arr.length ;i++){
//     if(typeof arr[i] == "string"){
//         arr[i] = null
//     }

// }
// console.log(arr);

//4
// let arr = [23,4565,67,8,7,5,57,8]
// let result = 0
// for(let i = 0;i<arr.length;i++){
//     if(arr[i] > result){
//                 result = arr[i]
//             }
//         }
//     console.log(result);


//5
// let arr = [23,54,57,97,18,433]
// let result = 0
// for(let i = 0;i<arr.length;i++){
//     result +=arr[i]
// }
// console.log(result);

//7
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0;i<arr.length;i++){
//     if(arr[i] % 2==0){
//         arr[i] = 0
//     }

// }
// console.log(arr);

//8
// let firstNum = prompt("1chi sonni kiriting") - 0;
// let operator = prompt("Operatorni kiriting (+, -, *, /)");
// let secondNum = prompt("2-chi sonni kiriting") - 0;

// let result;

// switch (operator) {
//     case "+":
//         result = firstNum + secondNum;
//         break;
//     case "-":
//         result = firstNum - secondNum;
//         break;
//     case "*":
//         result = firstNum * secondNum;
//         break;
//     case "/":
//         if (secondNum !== 0) {
//             result = firstNum / secondNum;
//         } else {
//             result = "0 ga bo'lish mumkin emas";
//         }
//         break;
//     default:
//         result = "Notog'ri operator kiritildi";
// }

// alert("Natija: "+result);


//9
// let int = prompt("Ism kiriting") 
// let arr = [
//     {
//         id: 1,
//     age: 20,
//     name : "Nuriddin" ,
//     gmail : "nuriddin@gmail . com"
//     },
//     {
//         id: 1,
//     age: 15,
//     name : "Komiljon" ,
//     gmail : "komiljon@gmail . com"
//     },
//     {
//     id: 1,
//     age: 25,
//     name : "Izzatbek" ,
//     gmail : "izzatbek@gmail . com"
//     }

    
// ]

// for(let i of arr){
//     if(int == i.name){
//     console.log(i);
//     }

// }

//

//10
// let maxAge = 0
// let arr = [
//     {
//     id: 1,
//     age: 20,
//     name : "Nuriddin" ,
//     gmail : "nuriddin@gmail . com"
//     },
//     {
//     id: 1,
//     age: 15,
//     name : "Komiljon" ,
//     gmail : "komiljon@gmail . com"
//     },
//     {
//     id: 1,
//     age: 25,
//     name : "Izzatbek" ,
//     gmail : "izzatbek@gmail . com"
//     }

    
// ]

// let sumAge = 0;

// for (let i = 0; i < arr.length; i++) {
//     sumAge += arr[i].age;
// }

// let avgAge = sumAge / arr.length;

// console.log("O;rta arifmetiki:", avgAge);
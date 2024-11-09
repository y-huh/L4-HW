//1
// let int = prompt("3 xonali son kiriting")
// function OneTwoThree(){
//     let One = Math.floor(int/100)
//     let Three = int%10
//     let Ten = (Math.floor(int/10)%10)

//     console.log(Three , Ten , One);
// }
// OneTwoThree(int)

//2
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(prompt("Son kiriting")));

//3
// function compareAges(a, b) {
//     if (a.age > b.age) {
//         console.log(a.name);
//     } else if (b.age > a.age) {
//         console.log(b.name);
//     } else {
//         console.log("Ikkalasi ham bir yoshda");
//     }
// }

// const person1 = {
//     name: "Alisher",
//     age: 25 
//     };
// const person2 = {
//     name: "Bobur",
//     age: 30 
//     };

// compareAges(person1, person2);

//4
// let user = { name: "Shaxzod" };
// let age = { age: "25" };
// let userJob = { job: "Developer" };

// let all = { ...user, ...age, ...userJob };

// console.log(all);

//5
// let int = prompt("Son kiriting")-0
// function counter(count) {
//     if(count > 1) {
//         count = count - 1;
//         counter(count);
//     } else {
//         return;
//     };
//     console.log(count);
    

// };

// counter(int);
// console.log(int);

//6
// let salaries = {
// aXodim: 150,
// bXodim: 180,
// cXodim:210
// }
// let all = 0

// for (let sal in salaries) {
//     all += salaries[sal]
//     }
//     console.log(all);

//7
// let number = [1,4,7,9,76,4,4,7,8,9,7,654,3,3,56,7]
// let bigg = 0
// for(i = 0; i < number.length; i++){
//     if(number[i] > bigg){
//         bigg = number[i]
//     }
// }
// console.log(bigg);

//8
// let arr = [2, 4, 6, 7, true, false, null, undefined];
// let sum = arr.map(value => {
//     if (value === undefined) return 0;
//     if (typeof value === 'boolean' || value === null) 
//         return 0;
//     return value;
// })
// .reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


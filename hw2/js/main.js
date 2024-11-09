//1
// const arr = [
//     {
//     id: 1,
//     name: "Botir",
//     age: 20,
//     hobby: "Fooball"
//     },
//     {
//     id: 2,
//     name: "Anvar",
//     age: 22,
//     hobby:"Basketball" 
//     },
//     {
//     id: 3,
//     name: "Shohrux",
//     age: 20,
//     hobby: "Basketball"
//     },
//     {
//     id: 4,
//     name: "Akram",
//     age: 22,
//     hobby: "Fooball" 
//     },
// ];

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby) {
//             if (!result.includes(arr[i])) {
//                 result.push(arr[i]);
//             }
//             if (!result.includes(arr[j])) {
//                 result.push(arr[j]);
//             }
//         }
//     }
// }

// console.log(result);

//2
// const arr = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3];
// const fake = [];
// const Number = {}; 

// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (Number[num] === undefined) {
//         Number[num] = 1;
//     } else {
//         Number[num]++;
//     }

//     if (Number[num] === 2) {
//         fake.push(num);
//     }
// }
// console.log(fake);

//3
// const arr = [22, 112, 3, 4, 222, 123, 43];

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// arr.unshift(max);

// console.log(arr);

//4
// function nameCheck() {
//     let size = prompt("Array o'lchamini kiriting:");
//     let arr = [];

//     for (let i = 0; i < size; i++) {
//         let name = prompt("Ism kiriting:");
//         arr.push(name);
//     }

//     let checkName = prompt("Tekshirish uchun ism kiriting:");
//     if (!arr.includes(checkName)) {
//         arr.push(checkName);
//     }

//     return arr;
// }

// let result = nameCheck();
// console.log(result);


//5
// function reverse(n) {
//     let arr = [];
//     for (let i = n; i >= 1; i--) {
//         arr.push(i);
//     }
//     return arr;
// }
// let n = prompt("Son kiriting:");
// let result = reverse(n);
// console.log(result);
// function doStuff(a,b,name){
//     print (sum(a,b))
//     print(sayHi(name))
// }

// function print(variable){
//     console.log(variable)
// }
// function sum(a,b){
//     asdadsdsd
//     return a+b
// }

// function sayHi(name){
//     return "Hi" +  name
// }

// doStuff(1,2,"kyle")
//------------hoisting--------------------

//console.log(sumArrow(1,2))
// function sum(a,b){
//     return a+b
// }

//let sumArrow=(a,b)=>{
//  return a+b
//}

//hoisting does not work with arrow functions as variables do not get hoisted as the arrow functions declared with variables
//---------------closures---------
// function print(variable){
//     let c=3
//     return function func(variable2){
//         console.log(variable);
//         console.log(variable2);
//         console.log(c);
//     }
// }

// let a=print(1)
// a(2)
//----------------callback----------------
// function sumCallback(a,b,callback){
//  callback(a+b)
// }
// function handlesum(sum){
//   console.log(sum)
// }
// sumCallback(1,2,handlesum)
// function nam(name, callback){
//   callback("hello " +  name)
// }
// nam("kalyan",function(variable){
//   console.log(variable)
// })
//--------------arrays-----------------
// const a=[
// [1,2,3,4,5],
// [6,7,8,9,10],
// [11,12,13,14,15]
// ]
// console.log(a[0][3])
// console.log(a[1][2])
// console.log(a[2][0])
//------------array methods---------------
// const a=[1,2,3,4,5]
//  const b=[6,7,8,9,10]

//  const newA= b.map(number=>{
//    return number* 5})

//    console.log(newA)
//map, filter, find, some,reduce,includes
// const s=a.reduce((sum,number) => {
//   return sum + number
// },1)
// console.log(s)
//-----------------------promises--------------------------------
/* function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromise(250).then(() => {
  console.log("1");
  return setTimeoutPromise(250);
}).then(() => {
  console.log("2");
  return setTimeoutPromise(250);
}).then(() => {
  console.log("3");
});
 */

// const button = document.querySelector("button");

// function addEventListenerPromise(element, method) {
//   return new Promise((resolve) => {
//     element.addEventListener(method, (e) => {
//       resolve(e);
//     });
//   });
// }

// addEventListenerPromise(button, "click").then((e) => {
//   console.log(e.type);
// });

//promise.all allows to run multiple promises concurrently
//promise.all calls .then only if all the promises suceedd
//promise.any works as the first promise that suceeds
//promise.race works as first one that succeds or fails
//promise.allsettled waits for all the promises to be completed
/* function ex1() {
  return new Promise((resolve) => setTimeout(() => resolve(5 / 6), 2000));
}
function ex2() {
  return new Promise((resolve) => setTimeout(() => resolve(3 * 4), 1500));
}
function ex3(ex1res, ex2res) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(ex1res + ex2res), 3000)
  );
}
ex1()
  .then((ex1res) => {
    return [ex1res, ex2()];
  })
  .then(([ex1res, p]) => {
    return p.then((ex2res) => ex3(ex1res, ex2res));
  })
  .then((final) => {
    console.log("final====>", final);
  }); */
//-------------------------------async await----------------
//await is only used in async function
//async await simplifies the program by not calling a additional function like we do in .then
// function getValueWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value)
//     })
//   })
// }

// async function dostuff() {
//   try {
//     const value1 = await getValueWithDelay('kyle', 250)
//     console.log(value1)

//   }
// }
//----------------------fetch-----------------------------
/* const url = "http://jsonplaceholder.typicode.com/users/5";
//fetch(url);
async function dostuff() {
  const response = await fetch(url);
  const users = await response.json();
  console.log(users.map((user) => user.name));
  //console.log(user);
}
// dostuff(); */
// console.log(1 + 2);
// console.log(4 + 8);
// function kt(a, b) {
//   console.log(a + b);
// }
// kt(7, 8);
/* console.log(a);
var a = 10;
k();
function kt() {
  console.log("kalyan");
};
 */

/* function any() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, "first");
  });
  const promise1 = new Promise((reject) => {
    setTimeout(reject, "second");
  });
}
const promises = [promise, promise1];
Promise.any(promises)
  .then((m) => {
    console.log(m);
  })
  .catch((err) => {
    console.error(err);  
  }); */

/* Promise.any([
  Promise.resolve(1),
  Promise.reject("Error on 2"),
  Promise.resolve(3),
])
  .then((m) => {
    console.log(m);
  })
  .catch((error) => {
    console.error(error);
  }); */
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

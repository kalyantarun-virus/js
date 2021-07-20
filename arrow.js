// const age=function kalyan(birthyear){
//     return 2021- birthyear;
// }
// console.log(age(1994));

// const age1=birthyear=>2021-birthyear;
// //const age2=age1(1994);
// // console.log(age2);
// console.log(age1(1994));

// const retirement=birthyear=>{
//     const age=2021-birthyear;
//     const retire=60-age;
//     return retire;
// }
// console.log(retirement(1994));

const retirement = (birthyear, _firstname) => {
  const age = 2021 - birthyear;
  const retire = 60 - age;
  return `${_firstname} retires in ${retire} years`;
};
console.log(retirement(1994, "kalyan"));
console.log(retirement(1991, "jayanth"));

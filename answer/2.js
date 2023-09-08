// // find  largest value
// function findmaxvalue(numbers) {
//   let largenumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (largenumber < numbers[i]) {
//       largenumber = numbers[i];
//     }
//   }
//   return largenumber;
// }

// let numbers = [3, 5, 7, 9, 20];
// let maxnumber = findmaxvalue(numbers);
// console.log(maxnumber);
// let num = prompt('enter value');

// function findcorrectnuber(num) {
//   if (num < 0) {
//     return 'negative';
//   } else if (num > 0) {
//     return 'positive';
//   } else {
//     return 'zero';
//   }
// }
// let ans = findcorrectnuber(num);
// console.log(ans);

function findcharacter(c){

  if(c>=65 && c<=90){
    return "capital";
  }
  else if(c>=97 && c<=122){
    return "small";
  }
  else{
    return "special";
  }
}
let c=prompt('enter character');
let ans=findcharacter(c);
console.log(ans);


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

// ****find positive/negative/zero
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

// ***findcharacter capital/small/special
// function findcharacter(c){
// let  code=c.charCodeAt(0);
//   if(code>=65 && code<=90){
//     return "capital";
//   }
//   else if(code>=97 && code<=122){
//     return "small";
//   }
//   else{
//     return "special";
//   }
// }
// let c=prompt('enter character');
// let ans=findcharacter(c);
// console.log(ans);

// ***print sunday to saturday
// function printdays(num){
//   if(num<=1){
//     return  "sunday";
//   }
//   else if(num<=2){
//     return "tuesday";
//   }
//   else if(num<=3){
//     return "wensday";
//   }
//   else if(num<=4){
//     return "thursday";
//   }
//   else if(num<=5){
//     return "friday";
//   }

//   else if(num<=6){
//     return "saturday";
//   }
//   else {
//     return "invalid";
//   }
// }

// let num=prompt('enter number');
// let ans=printdays(num);
// console.log(ans);

// ***find max/min number given this number

// function findmaxvalue(number){
// let largenumber=number[0];
// for(let i=1;i<number.length;i++){
//   if(largenumber<number[i]){
//   largenumber=number[i];
//   }
// }
// return largenumber;
// }
// let number=[3,5,7,9,10,15,20,40,1,5];
// let maxnumber=findmaxvalue(number);
// console.log(maxnumber);

// function findminvalue(number){
//   let smallnumber=number[0];
//   for(let i=1;i<number.length;i++){
//     if(smallnumber>number[i]){
//     smallnumber=number[i];
//     }
//   }
//   return smallnumber;
//   }
//   let num=[3,5,7,9,10,15,20,40,1,5];
//   let minnumber=findminvalue(number);
//   console.log(minnumber);

// ****sum of  first 100 odd number
// odd number
// let n=prompt('enter value');
// let sum=n*n;
// console.log(sum);

// even number
// let n=prompt('enter value');
// let num=Number(n);
// let ans=num*(num+1);
// console.log(ans);

// ***write reverse number
let number = 123;
if (isNaN(num)) {
  console.log('invalid output');
}
let reversenumber = 0;
let originalnumber = num;
while (num > 0) {
  let digit = num % 10;
  reversenumber = reversenumber * 10 + digit;
  num = Math.floor(num / 10);
}
console.log(reversenumber);
console.log(originalnumber);


// **palindrome number or not
// let number=121;
// if(isNaN(number)){
//   console.log('invalid');
// }
// let reversenumber=0;
// let originalnumber=number;
// while(number>0){
//   let digit=number%10;
//   reversenumber=reversenumber*10+digit;
//   number=Math.floor(number/10);
// }
// console.log(reversenumber);

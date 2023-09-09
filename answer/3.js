// / ***write reverse number
// let num = 123;
// if (isNaN(num)) {
//   console.log('invalid output');
// }
// let reversenumber = 0;
// let originalnumber = num;
// while (num > 0) {
//   let digit = num % 10;
//   reversenumber = reversenumber * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(reversenumber);
// console.log(originalnumber);

// **palindrome number or not
// let number = 121;
// if (isNaN(number)) {
//   console.log('invalid');
// } else {
//   let reversenumber = 0;
//   let originalnumber = number;
//   while (number > 0) {
//     let digit = number % 10;
//     reversenumber = reversenumber * 10 + digit;
//     number = Math.floor(number / 10);
//   }

//   if (reversenumber === originalnumber) {
//     console.log('palindromenumber');
//   } else {
//     console.log('palindrome not number');
//   }
// }


// ***decimal to binary
// function decimaltobinary(decimalnumber){
//   let binarynumber="";
//   while(decimalnumber>0){
//     let reminder=decimalnumber%2;
//     binarynumber=reminder+binarynumber;
//     decimalnumber=Math.floor(decimalnumber/2);
//   }
//   return binarynumber;
// }
// let decimalnumber=42;
// let bn=decimaltobinary(decimalnumber);
// console.log(bn);


// ****decimal to octal
// function decimaltooctal(decimalnumber){
//   let octalnumber="";
//   while(decimalnumber>0){
//     let reminder=decimalnumber%8;
//     octalnumber=reminder+octalnumber;
//     decimalnumber=Math.floor(decimalnumber/8);
//   }
//   return octalnumber;
// }
// let decimalnumber=250;
// let on=decimaltooctal(decimalnumber);
// console.log(on);


// ***decimalto hexadecimal
// function decimaltohexadecimal(decimalnumber){
//   let hexadecimal="";
//   let hexacharacter="0123456789ABCDEF";
//   while(decimalnumber>0){
//     let reminder=decimalnumber%16;
//     hexadecimal=hexacharacter[reminder]+hexadecimal;
//     decimalnumber=Math.floor(decimalnumber/16);
//   }
//   return hexadecimal;
// }
// let decimalnumber=45;
// let hn=decimaltohexadecimal(decimalnumber);
// console.log(hn);

// ***armstrongnumber
function isarmstrong(number){
let num=number.tostring();
let  n=num.length;
let  sum=0;
for(let i=1;i<n;i++){
  let digit=Number(num[i]);
  let sum=Math.pow(digit,n);
}
if(sum===number){
  return true;
}
else{
  return false;
}
}
let number=370;
let ans=isarmstrong(number);
console.log(ans);
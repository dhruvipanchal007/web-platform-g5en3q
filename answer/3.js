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
let number = 121;
if (isNaN(number)) {
  console.log('invalid');
} else {
  let reversenumber = 0;
  let originalnumber = number;
  while (number > 0) {
    let digit = number % 10;
    reversenumber = reversenumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  if (reversenumber === originalnumber) {
    console.log('palindromenumber');
  } else {
    console.log('palindrome not number');
  }
}

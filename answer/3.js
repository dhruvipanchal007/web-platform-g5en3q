// / ***write reverse number
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


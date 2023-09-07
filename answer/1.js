// 1
// 1,2
// 1,2,3
// 1,2,3,4

// for(let i=1;i<5;i++){
//   let str="";
//   for(let j=1;j<=i;j++){
//     str+=j;
//   }
//   console.log(str);
// }

// 1
// 2,2
// 3,3,3
// 4,4,4,4
// 5,5,5,5
// for(let i=1;i<6;i++){
//   let str="";
//   for(let j=1;j<=i;j++){
//     str+=i;
//   }
//   console.log(str);
// }

// *
// **
// ***
// ****
// *****
// for(let i=1;i<6;i++){
//   let str="";
//   for(let j=1;j<=i;j++){
//     str+="*";
//   }
//   console.log(str);
// }

// 1
// 01
// 101
// 0101
// 10101

// for (let i = 1; i < 6; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//     if ((i + j) % 2 === 0) {
//       str += '1';
//     } else {
//       str += '0';
//     }
//   }
//   console.log(str);
// }

// 1
// 2,3
// 4,5,6
// 7,8,9,10
for(let i=1;i<5;i++){
  let str="";
  for(let j=1;j<=i;j++){
    let num=str;
    num++;
    if(j<i){
    num+="";
    }
  }
  console.log(num);
}
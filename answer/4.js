// let number=[5,3,4,7,10];
// number.sort(function(a,b){
//   return a-b;
// })

// console.log(number);

// let number=[5,3,4,7,10];
// number.sort(function(a,b){
//   return b-a;
// })

// console.log(number);

// let n = 5;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   let number = prompt('enter number');
//   sum += Number(number);
  
// }
// console.log(sum);


// ***ascending order
// let number=[10,20,5,3,8];
// number.sort(function(a,b){
//   return a-b;
// })
// console.log(number);




// ***pay slip
// let b=100;
// let da=10/100 * b;
// let hra=7.50/100 * b;
// let pf=12.50/100 * b;
// let ma=300;

// let  gross=Number(b+da+hra+ma);
// let  net=gross-pf;
// console.log(net);



// ****grade assign student
// function isgrade(mark){
//   if(mark<=100 && mark>=80){
//     return "dist";
//   }
//   else if(mark<=79 && mark>=60){
//     return "first";
//   }
//   else if(mark<=59 && mark>=50){
//     return "second";
//   }
//   else if(mark<=49 && mark>=35){
//     return "first";
//   }
//   else {
//     return "fail";
//   }
// }
// let mark=prompt('enter mark');
// let grade=isgrade(mark);
// console.log(grade);

// ***series  sum
function seriessum(n){
  let sum=0;
  if(n>0){
    for(let i=1;i<=n;i++){
      sum+=1/n;
    }
  }
  else{
    console.log('invalid number')
  }
}
let n=4;
let ans=seriessum(n);
console.log(ans);
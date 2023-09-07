// find  largest value
function findmaxvalue(number){
  let largenumber=number[0];
  for(let i=0;i<number.length;i++){
    if(largenumber>number[i]){
      largenumber===number[i];
    }
  }
  return largenumber;
}

let number=[10,20,30,100];
let maxnumber=findmaxvalue(number);
console.log(maxnumber);
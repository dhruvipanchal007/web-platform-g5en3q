// find  largest value
function findmaxvalue(numbers){
  let largenumber=numbers[0];
  for(let i=0;i<numbers.length;i++){
    if(largenumber<numbers[i]){
      largenumber==numbers[i];
    }
  }
  return largenumber;
}

let numbers=[10,20,30,100];
let maxnumber=findmaxvalue(numbers);
console.log(maxnumber);
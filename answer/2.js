// find  largest value
function findmaxvalue(numbers){
  let largenumber=numbers[0];
  for(let i=1;i<numbers.length;i++){
    if(largenumber<numbers[i]){
      largenumber==numbers[i];
    }
  }
  return largenumber;
}

let numbers=[3,5,7,9,20];
let maxnumber=findmaxvalue(numbers);
console.log(maxnumber);
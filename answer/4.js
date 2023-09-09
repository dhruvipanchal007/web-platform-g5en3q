function isarmstrong(number){
  let numstr=number.tostring();
  let  n=numstr.length;
  let  sum=0;
  for(let i=1;i<n;i++){
    let digit=Number(num[i]);
     sum+=Math.pow(digit,n);
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
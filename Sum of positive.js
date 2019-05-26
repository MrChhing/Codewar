function positiveSum(arr) {
  var sum=0;
  var a= arr.map(function(x){
  if (x>0){
  return sum=sum+x;
  }
  })
  return sum;
}

// https://www.codewars.com/kata/594fae1a0462da7beb000046

function canJump(arr) {
  // your code here
  for(var ed=arr.length,i=ed-2;i>=0;i--) if(arr[i]+i>=ed) ed=i;
  return ed==0;
}


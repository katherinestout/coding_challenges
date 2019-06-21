const n= 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 
pairs = '';

// Complete the sockMerchant function below.
function sockMerchant() {
    //for each sock, match it to the ones that match, and then take them out from array
    //add them up and put them in sorted array

//first sort it
//then say if the first i is equal to the next i, count goes up
//if first i isnt equal to next i, get rid of first i then go to next i
let sorted = ar.sort((c, b) => c-b);
console.log(sorted);

for (i = 0; i < n; i++) {
  // console.log(socks[i]);
  var index = ar[i];
  var a = ar[0];

  if (a === index){
     // console.log(i);
      pairs++;
    
  }  
}
console.log(pairs);

}
sockMerchant();

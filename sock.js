const n= 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 

function sockMerchant() {

//first sort it
//then say if the first i is equal to the next i, count goes up
//if first i isnt equal to next i, get rid of first i then go to next i

//sorted in ascending order
let sorted = ar.sort((c, b) => c-b);
console.log(sorted);

//final count
let pairs = 0;

//looping over sorted array
//comparing each item of array with direct sibling
for (i = 0; i < n - 1; i++) {
  if(sorted[i] === sorted[i + 1] ){
    pairs ++;
    //increment i by one, allows us to skip to next item
    //if items don't match, normal loop continues
    i += 1;
  }
}
console.log(pairs);
return pairs;
}
sockMerchant();

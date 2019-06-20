const n= 9;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 
count = '';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    //for each sock, match it to the ones that match, and then take them out from array
    //add them up and put them in sorted array

//n.forEach

for (i = 0; i < socks.length; i++) {
  // console.log(socks[i]);
  var index = socks[i];
 // socks.indexOf(index) = sockIndex;

  if (socks[0] === index){
     // console.log(i);
      count++;
      console.log(count);
  }  

}

socks.splice(sockIndex);
console.log(socks);
}
sockMerchant();

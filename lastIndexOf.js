// function lastIndexOf(array, value) {
//   
//     for (var i = (array.length - 1); i > -1; i--) {
//       if (value === array[i]) {
//         var match = true
//         var Index = i
//         break
//       }
//     }
//     if (match) {
//       return Index
//     } else {
//       return -1
//     }
//   }

  function lastIndexOf(numbers, value){
    let match = false;
    var findNum
    for(let i = numbers.length - 1; i > -1; i--){
      if(value === numbers[i]){
        match = true;
        findNum = i;
        
      }
    }
    if(match){
      return findNum
    }else{
      return -1;
    }
  
  }
console.log(lastIndexOf([0,1,4,1,2],2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
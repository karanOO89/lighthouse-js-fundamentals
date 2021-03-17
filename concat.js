const concat = function(arr1, arr2){
    const newArr=[];
    for (let i=0;i<=arr1.length-1;i++){
        newArr.push(arr1[i]);}
        for (let x=0;x<=arr2.length-1;x++){
            newArr.push(arr2[x]);
        }
        
    
    return(newArr);
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]),"=?", [ 1, 2, 3, 4, 5, 6 ])
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
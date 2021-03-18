const merge= function(ar1, ar2){
  const newAr=[];
  const demAr=[];
    for(let x=0; x<=ar1.length-1;x++){
    newAr.push(ar1[x]);
    }
    if (ar2[0]=== newAr[newAr.length-1]){
         newAr.pop();
          for(let y = 0; y<=ar2.length-1;y++){
         newAr.push(ar2[y]);
          }
        }
    else if (ar2[0]> newAr[newAr.length-1]){
    for(let y = 0; y<=ar2.length-1;y++){
        newAr.push(ar2[y]);
         }
         
     
         
        }
            else if (ar2[0]< newAr[newAr.length-1]){
                for(let d= 0; d<=ar2.length-1;d++){
             newAr.push(ar2[d])
                }   
            }
        
            
    

    return(newAr.filter());
  }

  //console.log(merge([ 1, 2, 3, 4 ],[5, 6, 7 ]));
  console.log(merge([ 4 ], [ 2, 5, 8 ]));


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
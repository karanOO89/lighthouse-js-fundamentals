let x;
const howManyHundreds = function(x){
   let y = (x - (x % 100)) /100
   return(y)

}
console.log(howManyHundreds(15896));
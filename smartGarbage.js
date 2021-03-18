const smartGarbage = function(trash,bins){
  let k=Object.keys(bins);
  for (let i of k){
    if (i===trash){
    bins[i]++;
    }

  }
  return(bins)
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

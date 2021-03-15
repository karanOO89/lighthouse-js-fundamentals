const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  
  //let station;
  function chooseStations(stations){
    let finalValue = [];
  //let station;
    for ( let station of stations){
      const quantity = station[1];
      if(quantity >= 20){
        const type = station[2];
        if(type === "school" || type === "community centre"){
          finalValue.push(station[0]);
        }
      }
    }
  
    return finalValue;
  }
  console.log(chooseStations(stations));
    // Your code in here ...
  
  
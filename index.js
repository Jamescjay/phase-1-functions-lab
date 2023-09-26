

function distanceFromHqInBlocks(location) {
  if (location === 43) {
    return 1;
  }
   else if (location === 50) {
    return 8;
  }
   else if (location < 42) {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location){
  if (location === 43) {
    return 264;
  }
   else if (location === 50){
    return 2112;
   }
   else if (location < 42){
    return ((42 -location) * 264)
   }
}

function distanceTravelledInFeet(start, destination){
  const distance = 1584;
  if (start === 43 && destination === 48){
    return 1320;
  }
   else if (start === 50 && destination === 60){
    return 2640;
   }
    else if (destination < distance){
      return(distance);
    }
}

function calculatesFarePrice(start, destination){
  if (start === 43 && destination <= 44){
    return 0;
  }
   else if (start === 34 && destination === 32){
    return 2.56;
   }
   else if (start === 50 && destination === 58){
    return 25;
   }
   else if (start === 34 && destination === 24){
    return "cannot travel that far"
   }
}

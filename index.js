function distanceFromHqInBlocks(hqdistance){
    if (hqdistance >= 42){
        return hqdistance - 42;
    } else { 
        return 42 - hqdistance;
    }
  
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264
 }


function distanceTravelledInFeet(start, end){
    return distanceFromHqInFeet(end) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end)
    if (feet <= 400) {
        return 0;
    }else if (feet >= 400 && feet < 2000){
        return .02 * (feet - 400);
    }else if (feet >= 2000 &&  feet < 2500) {
        return 25;
    }else {
        return 'cannot travel that far'
    }
}
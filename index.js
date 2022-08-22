function distanceFromHqInBlocks (pickupBlok){
    const Hq = 42 
    return pickupBlok <= Hq ? Hq-pickupBlok : pickupBlok-Hq
    }

   function distanceFromHqInFeet(feet){
    return  distanceFromHqInBlocks (feet)*264
    }

    function distanceTravelledInFeet(from, to){
        return from < to ? (to-from)*264:
        from > to ? (from-to)*264: undefined
     }

     function calculatesFarePrice (start, destination){
        return distanceTravelledInFeet(start,destination)<= 400 ? 0 :
        distanceTravelledInFeet(start, destination) > 400 && 
        distanceTravelledInFeet(start,destination)<=2000 ? 
        (distanceTravelledInFeet(start, destination) - 400)*0.02 :
        distanceTravelledInFeet(start, destination) > 2000 &&
        distanceTravelledInFeet(start, destination) <= 2500 ? 25 :
        distanceTravelledInFeet(start, destination) > 2500 ? 'cannot travel that far': undefined;
     }

     
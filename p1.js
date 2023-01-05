function Bike(distance){
    const time = distance/15;

    return time;
}

function Auto(distance, departureTime){
    let speed;

    if(departureTime >= 9 && departureTime <=19){
        speed =10;
    }else{
        speed = 30;
    }

    const time = distance/speed;

    return time;
}

function Best(distance, departureTime){
    const bike = Bike(distance);
    const auto = Auto(distance, departureTime);
    if(bike < auto){
        besttime = bike;
    }else{
        besttime = auto;
    }
    const  besttimemin = besttime * 60;
    return besttimemin;
}

console.log(Best(5,7));
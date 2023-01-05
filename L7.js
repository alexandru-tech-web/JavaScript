function DeterminateDistace(distance) {
    const costbytrain = 1 * distance;
    const costbyplane = 0.5 * distance + 200;

    if (costbytrain > costbyplane) {
        console.log('Plane is optimal decision');
    }else{
        console.log('Train is optimal decision')
    }
}

DeterminateDistace(4000);


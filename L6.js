function DeterminateMaxHight(h1,h2,h3) {

    let maxHigh;

if(h1>h2) {
    if(h1>h3) {
        maxHigh = h1;
    }else{
        maxHigh =h3;
    }
}else{
    if(h2>h3) {
        maxHigh = h2;
    }else{
        maxHigh = h3;
    }
}



return maxHigh;

}


console.log(DeterminateMaxHight(114,153,132));
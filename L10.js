const scores = [32,45,56,42,67,31,43,54,34,77];

for (let index = 0; index <= 6; index= index + 2){
    console.log("primele 3 punctaje sunt " + scores[index]);
}
for(let index = 9; index >= 7; index = index - 2){
    console.log("Ultimele 3 punctaje sunt " + scores[index]);
}
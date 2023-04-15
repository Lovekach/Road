function getAverage(marks) {
    quantityElementsInArray = marks.length;
    sumArray = marks.reduce((a, b) => (a + b));
    averageValue = Math.round(sumArray / quantityElementsInArray);
    console.log(averageValue);
}

getAverage([2,2,2,2]),2;
getAverage([1,2,3,4,5,]),3;
getAverage([1,1,1,1,1,1,1,2]),1;





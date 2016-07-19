// Time to christmas

var christmasDate = new Date(2016,12,25);
var today = new Date();

var secondsLeft = (christmasDate - today) /1000;

console.log(secondsLeft + ' Seconds left to christmas!');
console.log(secondsLeft / 60 / 60 / 24 + ' Days left to christmas!');

import saCities from './SouthAfricanCities.js';

var randa = function randomc() {Math.floor(Math.random() * 1201);}

var cities = [];

for(var i = 0; i <2; i++){
    cities[i] = saCities[randa];   
}

export default cities;
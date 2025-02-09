const salary = 25000;
const isBcs = true;
const height = 5.8;
const age = 25;

if ( salary > 20000 && height ){
    console.log('good husband')
}

else {console.log('bad husband')}

if ( salary > 20000 || height ){
    console.log('good husband')
}


if ( salary > 20000 && isBcs && height == 5.8 ){
    console.log('good husband')
}


// ---COMPLEX CONDITION--------------------

if ( salary > 20000 && isBcs && height == 5.8 ){
    console.log('good husband')
}

if ( salary > 20000 && isBcs && height == 5.8 && age == 25 ){
    console.log('good husband')
}


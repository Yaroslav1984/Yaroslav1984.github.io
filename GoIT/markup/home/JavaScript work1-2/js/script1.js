var x = prompt('число которое мы будем возводить в степень');
var n = prompt('степень в которую будем возводить')


/*------------------------------------введение чисел------------------------------------*/-

function pow(base, exponent) { 
var result = 1;

for (var i = 0; i < exponent; i++) {
   result = result * base;
}


/*-----------------------результат----------------------------------------------------*/

return result;
}


var powResult = pow(x, n);

console.log(powResult);

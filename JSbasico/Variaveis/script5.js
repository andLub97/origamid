console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(true || true);

console.log(5+5 && 5-5);
console.log(5+5 || 5-5);

var cond = (5-5) || (5+5) || (10-5);
//primeiro verdadeiro é retornado
console.log(cond);
var cond = (5-5) || (5+5) && (10-5);
//último verdadeiro é retornado
console.log(cond);
var myArray = [11,24,35,56];
console.log('array: ' + myArray+' : ['+myArray.length+']');
console.log('ADDED, Novo lenght: '+myArray.push(‘new string’)); //lenght 5
console.log('array: ' + myArray+' : ['+myArray.length+']');
console.log('REMOVIDO: ' + myArray.pop()); //ultimo item, o removido
console.log('array: ' + myArray+' : ['+myArray.length+']');
console.log('ADDED, Novo lenght: '+ myArray.unshift(18,93,78));
//adiciona elemntos no inicio
myArray[0]= 10+3;
console.log('array: ' + myArray+' : ['+myArray.length+']');
console.log('REMOVED, Novo lenght:'+myArray.shift()); //remove ao primeiro
console.log('array: ' + myArray+' : ['+myArray.length+']');
console.log(myArray.splice(0,3));// remove do zero [0] dos primeiros 3
console.log('array: ' + myArray); //
console.log(eval("94.6/0.05+'sdsd'"));
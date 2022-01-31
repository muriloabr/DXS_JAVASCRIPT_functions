function adicionarZero(i) { //adicionar zero na hora
    if (i < 10) {
        i = "0" + i
    }
    return i;
}
function horaAtual(){ //obter a hora atual
    const agora = new Date();
    let h = adicionarZero(agora.getHours());
    let m = adicionarZero(agora.getMinutes());
    let s = adicionarZero(agora.getSeconds());
    let time = h + ":" + m + ":" + s;
    return time;
}  

console.log("INICIO > "+ horaAtual()); //horario atual

/*ARRAYS -- INICIO*/
let meuArray = [10,11,12,13];
const arrayConst = [1,2,3,4,5];
var todos_resultados = "<div id='arrays'>";
todos_resultados += "<h2>Arrays</h2>";
todos_resultados += 'ARRAY INICIAL: meuArray: ' + meuArray+' : length [' + meuArray.length+']'; // array incial
todos_resultados += '<br>';
todos_resultados += '<br>';
todos_resultados +=  'ADICIONADO: PUSH("new Array()") | Novo lenght: '+meuArray.push("new Array()"); // push() adiciona e retorna o novo length do array
todos_resultados += '<br>';
todos_resultados +=  'ADICIONADOS NO INICIO: UNSHIFT("6,7,"new Integer()",9") | Novo lenght: [' + meuArray.unshift(6,7,"new Integer()",9)+"]"; //unshift adiciona no inicio do array os elementos passados
todos_resultados += '<br>';
meuArray[meuArray.length] = "new Decimal()";
todos_resultados +=  'meuArray[meuArray.length] = "new Decimal()" | Novo lenght: ' + meuArray.length; // adicionando e retornando o novo length do array
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
todos_resultados += '<br>';
todos_resultados +=  'REMOVIDO: POP(): "' + meuArray.pop()+'"'; //ultimo item, o removido
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
todos_resultados +=  'REMOVED: SHIFT(): "'+meuArray.shift()+'"'; //remove o primeiro elemento
todos_resultados += '<br>';
todos_resultados +=  'REMOVED: SPLICE(0,3): "' + meuArray.splice(0,3)+'"';// remove do zero [0] dos primeiros 3
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
todos_resultados += '<br>';
meuArray[0]= 2+1;
todos_resultados += 'meuArray[0] = 2+1 | com cálculo [0]: ' + meuArray[0];
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
meuArray[0]= meuArray[1]++;
todos_resultados += 'meuArray[0] = meuArray[1]++ | com cálculo [0]: ' + meuArray[0]+' [1]: ' +  meuArray[1];
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
meuArray[0]= ++meuArray[1];
todos_resultados += 'meuArray[0] = meuArray[1]++ | com cálculo [0]: ' + meuArray[0]+' [1]: ' +  meuArray[1];
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '<br>';
meuArray[2] = eval("94.6/0.05+'sdsd'");
todos_resultados += 'meuArray[2] = eval("94.6/0.05+"sdsd") |  com cálculo [2]: ' + meuArray[2];
todos_resultados += '<br>';
todos_resultados += 'ARRAY ATUAL:  "' + meuArray+'" : [' + meuArray.length+']'; // array atual
todos_resultados += '</div>';
document.getElementById('funcionalidades').innerHTML = todos_resultados;
/*ARRAYS -- FIM*/

console.log("FIM > "+ horaAtual()); //horario atual
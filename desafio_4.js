let imc = function(altura, peso) {
    if (Number.isNaN(altura) || Number.isNaN(peso)) {
        return 'Parâmetros no formato incorreto';
    }

    let imc = peso / (altura ^ 2);
    imc = imc.toFixed(1); 

    if (imc < 18.5) {
        return 'IMC: ' + imc + ' (Abaixo do Peso)';
    } else if (imc < 25.1) {
        return 'IMC: ' + imc + ' (Normal)';
    } else if (imc < 30) {
        return 'IMC: ' + imc + ' (Acima do Peso)';
    } else {
        return 'IMC: ' + imc + ' (Obeso)';
    }
}

let altura = 1.75;
let peso = 85;

console.log(imc(altura, peso));
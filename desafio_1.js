const numerosAte19 = ['', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

let numero_escrito = function (numero) {
    let toNumberArray = function(number) {
        return String(number).split("").map((digito) => {
            return Number(digito);
        });
    } 

    let numero_dezena = function (numero, num_array) {
        if (numero >= 20) {
            return dezenas[num_array[0]] + ' e ' + numerosAte19[num_array[1]];
        } else {
            return numerosAte19[numero];
        }
    }

    let numero_centena = function(numero, num_array) {
        let num_dez = numero - (num_array[0] * 100);

        let num_cent = centenas[num_array[0]];

        if (num_dez > 0) {
            num_cent += ' e ' + numero_dezena(num_dez, toNumberArray(num_dez));
        }

        return num_cent;
    }

    let numero_milhar = function(numero, num_array) {
        let num_cent = numero - (num_array[0] * 1000);

        let num_mil = numerosAte19[num_array[0]] + ' mil'

        if (num_cent > 0) {
            num_mil += ' e ' + numero_centena(num_cent, toNumberArray(num_cent));
        }

        return num_mil;
    }

    if (numero < 0 || numero > 9999 || !Number.isInteger(numero)) {
        return 'Valor fora do intervalo aceito!';
    }

    if (numero == 0) {
        return 'zero';
    }

    if (numero == 100) {
        return 'cem';
    }

    let num_array = toNumberArray(numero);

    if (numero >= 1000) {
       return numero_milhar(numero, num_array);
    } 
    
    if (numero > 100) {
       return numero_centena(numero, num_array);
    }

    return numero_dezena(numero, num_array);
}

let numero = 1500;

console.log(numero_escrito(numero));
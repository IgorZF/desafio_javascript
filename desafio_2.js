let isInArray = function (number_array, number) {
    console.log(number_array)

    number_array.forEach(number => {
        if (!Number.isInteger(number)) {
            return 'Vetor contém valores não inteiros!';
        }
    });

    if (!Number.isInteger(number)) {
        return 'Número não é inteiro!';
    }

    if (number_array.includes(number)) {
        return 'Número ' + number + ' presente no vetor na posição: ' + number_array.indexOf(number);  
    } else {
        return 'Número ' + number + ' não está presente no vetor';
    }
}

let vetor = [2, 6, 123, 3876, 23, 97, 48]

console.log(isInArray(vetor, 3876));
//Crie uma função que receba um número inteiro como argumento e retorne "Even"para números pares ou "Odd"ímpares.

function numeroInteiro(num) {
    if (num %2 === 0) {
    return "Even";
}else {
    return "Odd"
}

}

console.log(numeroInteiro(7))
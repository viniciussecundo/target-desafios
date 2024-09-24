function inverterString(str) {
    
    return str.split('').reverse().join('');
}

const stringOri = "Quero Ser contratado =D";
const stringInvertida = inverterString(stringOri);
console.log(`String original: ${stringOri}`);
console.log(`String invertida: ${stringInvertida}`);
function areaQuad(lado){
    return lado*lado;
}

console.log(areaQuad(8));

function imc(peso, altura){
    const imc = peso/(altura**2);
    return imc;
}

console.log(imc(80,1.8));

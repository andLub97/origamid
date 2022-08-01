function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Por favor digite um número';
    }else if(idade>=60){
        return 'Pertence a terceira idade';
    }
}

console.log(terceiraIdade('a'));

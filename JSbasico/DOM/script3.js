//exercícios

//retorne todas as imagens do site no console

const img = document.querySelectorAll('img');
console.log(img);

//apenas imagens que começam com a palavra imagem

 const imagensA = document.querySelectorAll('img[src^="img/"]');
 console.log(imagensA)

 //links internos onde href começa com #

 const linkInt = document.querySelectorAll('[href^="#"');
 console.log(linkInt);

//selecione o último p do site

const ps = document.querySelectorAll('p');
console.log(ps[ps.length-1]);

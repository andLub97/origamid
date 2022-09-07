const imgs = document.querySelectorAll('img');
//console.log(imgs);
/*let i = 0;
imgs.forEach(function(item, index,array){
    console.log(item, index, array);
});
*/
imgs.forEach((item)=> {
    console.log(item);
});

//exibindo todos os parágrafos do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item)=>{
    console.log(item.innerText);
});
let elm_menu = document.querySelector('.menu');
let menu_reponsive = document.querySelector('.menu_nav');
//console.log(menu_reponsive);

elm_menu.addEventListener('click',function(){

    menu_reponsive.style.height = "350px";
  

});

const handleclose = () =>{
    menu_reponsive.style.height = "0";
}
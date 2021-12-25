//UI
//START BANNER SECTION
const burger = document.querySelector('.navbars');
const blcontainer = document.querySelector('.bl-container');
const menu = document.querySelector('.menus');
const close = document.querySelector('.close');

blcontainer.addEventListener('click',()=>{   
            burger.classList.remove('btn');
            blcontainer.classList.add('out');
            menu.classList.add('in');  
});

close.addEventListener('click',()=>{

    burger.classList.add('btn');
    blcontainer.classList.remove('out');
    menu.classList.remove('in');
});

//navlink toggle=>active
const lglink = document.querySelectorAll('.lglink');

lglink.forEach(lglin=>{
   lglin.addEventListener('click',()=>{
    linkremove();
    lglin.classList.add('active');
   }) ;
});

function linkremove(){
    lglink.forEach(lglin=>{
        if(lglin.classList.contains('active')){
            lglin.classList.remove('active');
        }
    });
}

//scroll value
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfo = document.querySelector('.portfo');
const contact = document.querySelector('.contact');

window.addEventListener('scroll',()=>{
    console.log(scrollY);
    let scroll = scrollY;

    if(scroll <= 100){
        linkremove();
        home.classList.add('active');
    }else if(scroll <= 700){
        linkremove();
        about.classList.add('active');
    }else if(scroll <= 1500){
        linkremove();
        portfo.classList.add('active');
    }else if(scroll <= 1838){
        linkremove();
        contact.classList.add('active');
    }
});

//START FOOTER
const date = document.querySelector('.date');
const getyear = new Date().getFullYear();
date.textContent = getyear
console.log(getyear);
//EDND FOOTER


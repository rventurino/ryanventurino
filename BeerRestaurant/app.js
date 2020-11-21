const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
    });
    
}

navSlide();


function marg1(){
    var slider = document.querySelector('#slider');
    slider.style.marginLeft='-100%';
    function marg2(){
        var slider = document.querySelector('#slider');
    slider.style.marginLeft='-200%';
    function marg0(){
        var slider=document.querySelector('#slider');
        slider.style.marginLeft='0';
                setTimeout(marg1, 8000);
        }
        setTimeout(marg0, 8000);
    }
    setTimeout(marg2, 8000);
}

setInterval(slid, 7500);
setInterval(para, 7200);
setInterval(head, 7200);
setInterval(line, 7300);
setTimeout(marg1, 8000);
setInterval(slid2, 8500);
setInterval(head2, 8500);
setInterval(para2, 8500);
setInterval(line2, 8500);

function slid(){
    var s=document.querySelector('.slid');
    var i;
    for(i=0; i < s.length; i++){
        s[i].style.transform='scale(.8)';
    }
}
function slid2(){
    var s=document.querySelector('.slid');
    var i;
    for(i=0; i < s.length; i++){
        s[i].style.transform='scale(1)';
    }
}

function head(){
    var h=document.querySelectorAll('h1');
    for(var i = 0; i<h.length; i++){
        h[i].style.top='70px';
    }
}

function head2(){
    var h=document.querySelectorAll('h1');
    for(var i = 0; i<h.length; i++){
        h[i].style.top='0';
    }
}

function para(){
    var p = document.querySelectorAll('p');
    for(var i = 0; i < p.length; i++){
        p[i].style.bottom='40px';
    }
}

function para2(){
    var p = document.querySelectorAll('p');
    for(var i = 0; i < p.length; i++){
        p[i].style.bottom='0';
    }
}

function line(){
    var l = document.querySelectorAll('.line');
    for(var i = 0; i<l.length; i++){
        l[i].style.transform='scale(0)';
    }
}

function line2(){
    var l = document.querySelectorAll('.line');
    for(var i = 0; i<l.length; i++){
        l[i].style.transform='scale(1)';
    }
}
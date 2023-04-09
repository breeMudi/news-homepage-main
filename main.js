let navImg1 = document.querySelector('.navimg1')
let navImg2 = document.querySelector('.navimg2')

function navigate1(){
    navImg1.style.visibility = 'hidden';
    navImg2.style.visibility = 'visible';
    document.querySelector('nav').style.visibility='visible';
}

function navigate2(){
    if(innerWidth<413){
        navImg1.style.visibility = 'visible';
        navImg2.style.visibility = 'hidden';
        document.querySelector('nav').style.visibility='hidden';
}}

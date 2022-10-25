const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header-block');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const backGround = document.querySelector('.backgr')


burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    logo.classList.toggle('active');
    headerNav.classList.toggle('active')
    body.classList.toggle('no-scroll')
    backGround.classList.toggle('active')
})


backGround.addEventListener('click', (e)=>{
    e.preventDefault();
    burger.classList.remove('active');
    logo.classList.remove('active');
    headerNav.classList.remove('active')
    body.classList.remove('no-scroll')
    backGround.classList.remove('active')
})

//---------------------burger--------------------//

let points = document.querySelectorAll('.donate-point');
let prices = document.querySelectorAll('.price');
const inputCost = document.querySelector('#money');

points.forEach(point=>{
    point.addEventListener('click', (e)=>{
        e.preventDefault();
        pointsRemover();
        priceRemover();
        let index=pointFinder(point);
        point.classList.toggle('active');
        prices[index].classList.toggle('active');
        inputCost.value=prices[index].textContent.split('$')[1]
    })
})

const mediaQuery1600 = window.matchMedia('(min-width: 1600px)')
const mediaQuery1000 = window.matchMedia('(min-width: 1000px)')

inputCost.oninput = function(){
    if (inputCost.value==5000){
        if(mediaQuery1600.matches){
            pointsRemover();
            priceRemover();
            points[0].classList.toggle('active');
            prices[0].classList.toggle('active');
        }
    }
    if (inputCost.value==2000){
        if(mediaQuery1000.matches){
            pointsRemover();
            priceRemover();
            points[1].classList.toggle('active');
            prices[1].classList.toggle('active');
        }
    }
    if (inputCost.value==1000){
        if(mediaQuery1000.matches){
            pointsRemover();
            priceRemover();
            points[2].classList.toggle('active');
            prices[2].classList.toggle('active');
        }
    }
    if (inputCost.value==500){
        pointsRemover();
        priceRemover();
        points[3].classList.toggle('active');
        prices[3].classList.toggle('active');
    }
    if (inputCost.value==250){
        pointsRemover();
        priceRemover();
        points[4].classList.toggle('active');
        prices[4].classList.toggle('active');
    }
    if (inputCost.value==100){
        pointsRemover();
        priceRemover();
        points[5].classList.toggle('active');
        prices[5].classList.toggle('active');
    }
    if (inputCost.value==50){
        pointsRemover();
        priceRemover();
        points[6].classList.toggle('active');
        prices[6].classList.toggle('active');
    }
    if (inputCost.value==25){
        pointsRemover();
        priceRemover();
        points[7].classList.toggle('active');
        prices[7].classList.toggle('active');
    }
}


function pointsRemover(){
    for (let i=0;i<points.length;i++){
        points[i].classList.remove('active')
    }
}

function priceRemover(){
    for (let i=0;i<points.length;i++){
        prices[i].classList.remove('active')
    }
}

function pointFinder(elem){
    for (let i=0;i<points.length;i++){
        if (elem==points[i]){
            return i;
        }
    }
}



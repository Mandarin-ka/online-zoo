const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header-block');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const backGround = document.querySelector('.backgr')


//---------------------burger--------------------//
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
    popup.classList.remove('active')
})

//---------------------slider---------------------//
let itemImgs = document.querySelectorAll('.animal-item-img');
let animalNames = document.querySelectorAll('.animal-item-name');
let animalPlacesLiving = document.querySelectorAll('.animal-item-zoo');
let animalFood = document.querySelectorAll('.animal-description-food');
let animalButtonLeft = document.querySelector('.left');
let animalButtonRight = document.querySelector('.right');
let animalItems = document.querySelectorAll('.animal-item')

let indexes=[0,1,2,3,4,5,6];
let shuffle = (arr) => arr.sort(()=>Math.random()-0.5);

animalButtonLeft.addEventListener('click', slideLeft);
animalButtonRight.addEventListener('click', slideRight)

sliderChanger();
function sliderChanger(){
    foodRemover();
    shuffle(indexes)
    for (let i=0;i<6;i++){
        itemImgs[i].src = pets[indexes[i]].img;
        animalNames[i].textContent = pets[indexes[i]].name;
        animalPlacesLiving[i].textContent = pets[indexes[i]].livingPlace;
        if(pets[indexes[i]].foodType=='predator'){
            animalFood[i].children[0].src="./../assets/icons/fish_icon.svg"
            animalFood[i].children[1].src="./../assets/icons/steak_icon.svg"
            animalFood[i].children[0].classList.add('fish')
        }
        else{
            animalFood[i].children[0].src="./../assets/icons/bamboo.svg"
            animalFood[i].children[1].src="./../assets/icons/banana.svg"
            animalFood[i].children[1].classList.add('banana')
        }
    }
}

function foodRemover(){
    for (let i=0;i<animalFood.length;i++){
        animalFood[i].children[0].classList.remove('fish');
        animalFood[i].children[1].classList.remove('banana');
    }
}

function leftRightRemover(){
    for (let i=0;i<animalItems.length;i++){
        animalItems[i].classList.remove('left')
        animalItems[i].classList.remove('right')
    }
}

function slideLeft(){
    for (let i=0;i<animalItems.length;i++){
        animalItems[i].classList.add('left')
        animalButtonRight.setAttribute('disabled', 'disabled')
        setTimeout(sliderChanger, 600);
        setTimeout(leftRightRemover, 750);
        setTimeout(removeDisableButton, 1150);
    }
}

function slideRight(){
    for (let i=0;i<animalItems.length;i++){
        animalItems[i].classList.add('right')
        animalButtonRight.setAttribute('disabled', 'disabled')
        setTimeout(sliderChanger, 600);
        setTimeout(leftRightRemover, 750);
        setTimeout(removeDisableButton, 1150);
    }
}

function removeDisableButton(){
    animalButtonRight.removeAttribute('disabled')
    animalButtonLeft.removeAttribute('disabled')
}

//----------------------popup-------------------//
const popupCross = document.querySelector('.cross-popup');
const popup = document.querySelector('.popup');
const testimonialItems = document.querySelector('.testimonial-items')
const mediaQuery1000 = window.matchMedia('(max-width: 1000px)')

testimonialItems.addEventListener('click',(e)=>{
    if(mediaQuery1000.matches){
        if(e.target.closest('.testimonial-item')!= null){
            e.preventDefault();
            let tempObj = currCommentators(e.target.closest('.testimonial-item').querySelector('h4').textContent);
            popup.querySelector('img').src=tempObj.photo;
            popup.querySelector('h4').textContent=tempObj.name;
            popup.querySelector('.place').textContent=tempObj.country;
            popup.querySelector('.date').textContent=tempObj.lastOnline;
            popup.querySelector('.popup-comment').textContent=tempObj.comment;
            body.classList.add('no-scroll');
            backGround.classList.add('active');
            popup.classList.add('active');
        }
    }
})

function currCommentators(str){
    for (let i=0;i<commentators.length;i++){
        if(str==commentators[i].name){
            return commentators[i];
        }
    }
}


popupCross.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.remove('no-scroll');
    backGround.classList.remove('active');
    popup.classList.remove('active')
})

//------------------------------carousel-----------------------//
const scrolling = document.querySelector('#scroll')
const testimonialCollectionItems = document.querySelectorAll('.testimonial-item')
let prev=scrolling.value;
let currentTransform=0;
scrolling.oninput = function(){
    let curr=scrolling.value;
    for (let i=0;i<testimonialCollectionItems.length;i++){
        testimonialCollectionItems[i].style.transform='translate(' + -(currentTransform +1*(curr-prev)*298)+ 'px, 0)'
    }
    currentTransform=(curr-1)*298
    prev=curr;
}

function checker(){
    if(mediaQuery1000.matches){
        for (let i=0;i<testimonialCollectionItems.length;i++){
            testimonialCollectionItems[i].style.transform='translate(0, 0)'
        }
        currentTransform=0
    }
    else{
        return;
    }
}

setInterval(checker, 100)


let indexesTest=shuffle([0,1,2,3,4,5,6,7,8,9,10]);

for (let i=0;i<commentators.length;i++){
    testimonialCollectionItems[i].querySelector('img').src=commentators[indexesTest[i]].photo;
    testimonialCollectionItems[i].querySelector('h4').textContent=commentators[indexesTest[i]].name;
    testimonialCollectionItems[i].querySelector('.place').textContent=commentators[indexesTest[i]].country;
    testimonialCollectionItems[i].querySelector('.date').textContent=commentators[indexesTest[i]].lastOnline;
    testimonialCollectionItems[i].querySelector('.comment').textContent=commentators[indexesTest[i]].comment;
}



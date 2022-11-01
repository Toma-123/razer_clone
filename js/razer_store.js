
const elSlide = document.querySelectorAll('.slide_ul');

const rightBtn0 = document.querySelector('.right_button');
const leftBtn0 = document.querySelector('.left_button');

const leftBtn1 = document.querySelector('.left_button1')
const rightBtn1 = document.querySelector('.right_button1')

const leftBtn2 = document.querySelector('.left_button2')
const rightBtn2 = document.querySelector('.right_button2')

        
function scrollMove(i,t){
    elSlide[i].scrollBy({top:0, left:t, behavior:"smooth"});  
};


rightBtn0.addEventListener('click',()=>{

    scrollMove(0,1000);
    

})

leftBtn0.addEventListener('click',()=>{    
    
    scrollMove(0,-1000);
    

})


elSlide[0].addEventListener('scroll',()=>{
    
    if(elSlide[0].scrollLeft > 1471){
        rightBtn0.style.display="none"    
    }else{
        rightBtn0.style.display="block"
    }
    
    if(elSlide[0].scrollLeft < 472 ){
        leftBtn0.style.display="none"
    }else{
        leftBtn0.style.display="block"
    }
})

elSlide[1].addEventListener('scroll',()=>{

    if(elSlide[1].scrollLeft > 1471){
        rightBtn1.style.display="none"    
    }else{
        rightBtn1.style.display="block"
    }
    
    if(elSlide[1].scrollLeft < 471){
        leftBtn1.style.display="none"
    }else{
        leftBtn1.style.display="block"
    }
})

elSlide[2].addEventListener('scroll',()=>{

    if(elSlide[2].scrollLeft > 1471){
        rightBtn2.style.display="none"    
    }else{
        rightBtn2.style.display="block"
    }
    
    if(elSlide[2].scrollLeft < 471){
        leftBtn2.style.display="none"
    }else{
        leftBtn2.style.display="block"
    }
})



rightBtn1.addEventListener('click',()=>{
    
    scrollMove(1,1000);
})

leftBtn1.addEventListener('click',()=>{
    scrollMove(1,-1000);
})

rightBtn2.addEventListener('click',()=>{
    
    scrollMove(2,1000);
})

leftBtn2.addEventListener('click',()=>{
    scrollMove(2,-1000);
})




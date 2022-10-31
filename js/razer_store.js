const rightBtn = document.querySelector('.right_button');
const leftBtn = document.querySelector('.left_button');
const elSlide = document.querySelectorAll('.slide_ul');

const leftBtn2 = document.querySelector('.left_button2')
const rightBtn2 = document.querySelector('.right_button2')

const leftBtn3 = document.querySelector('.left_button3')
const rightBtn3 = document.querySelector('.right_button3')

        
function scrollMove(i,t){

            
    elSlide[i].scrollBy({top:0, left:t, behavior:"smooth"});            
}

rightBtn.addEventListener('click',()=>{

    scrollMove(0,1000);
})

leftBtn.addEventListener('click',()=>{
    
    scrollMove(0,-1000);
})


rightBtn2.addEventListener('click',()=>{
    
    scrollMove(1,1000);
})

leftBtn2.addEventListener('click',()=>{
    scrollMove(1,-1000);
})

rightBtn3.addEventListener('click',()=>{
    
    scrollMove(2,1000);
})

leftBtn3.addEventListener('click',()=>{
    scrollMove(2,-1000);
})




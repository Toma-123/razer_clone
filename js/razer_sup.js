

const leftBtn = document.querySelector('.left_button');
const rightBtn = document.querySelector('.right_button');

const elUl = document.querySelector('.sup_slide > ul');
const supSlide = document.querySelectorAll('.sup_slide > ul > li');

let idx=0;

let cloneFirst = supSlide[0].cloneNode(true);
let cloneLast = supSlide[7].cloneNode(true);

elUl.append(cloneFirst);
elUl.prepend(cloneLast);

leftBtn.addEventListener('click',function(){
    
    slideFun('left');
})
rightBtn.addEventListener('click',function(){
    slideFun('right');
})

// `transform: translateX(${-idx*100}%);`; 



// rightBtn.addEventListener('click',function(){
    
//     slideFun('right');
// })

function slideFun(s){

    
    if(s=='right'){
        if(idx<9)idx++;
    }else if(s=='left'){
        if(idx>0)idx--;
    }
    
    elUl.style= `transition: 0.5s; transform: translateX(${-idx*100}%);`; 

    setTimeout(function(){
        if(idx==9){
            idx=1;
            
            elUl.style= `transition:5s, transform: translateX(${-idx*100}%);`; 
        }

        if(idx==0){
            idx=8;
            
            elUl.style= `transition:5s, transform: translateX(${-idx*100}%);`; 
        }

    },1000)





    console.log(idx)
        
    }


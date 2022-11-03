

const leftBtn = document.querySelector('.left_button');
const rightBtn = document.querySelector('.right_button');

const elUl = document.querySelector('.sup_slide > ul');
const supSlide = document.querySelectorAll('.sup_slide > ul > li');
const slideCon =document.querySelector('.sup_slide');

let idx=1;

let cloneFirst = supSlide[0].cloneNode(true);
let cloneLast = supSlide[7].cloneNode(true);

const goBtn = document.querySelector('.go_btn');
const stopBtn = document.querySelector('.stop_btn');
const page = document.querySelectorAll('.pagi > span');



elUl.append(cloneFirst);
elUl.prepend(cloneLast);

leftBtn.addEventListener('click',function(){
    
    slideFun('left');
})
rightBtn.addEventListener('click',function(){
    slideFun('right');
})


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
            elUl.style= `transition:0s; transform: translateX(${-idx*100}%);`; 
        }

        if(idx==0){
            idx=8;
            
            elUl.style= `transition:0s; transform: translateX(${-idx*100}%);`; 
            
        }

    },500)

    page.forEach((val,key)=>{
        val.classList.remove('active')
        
        if(idx==9){
            page[0].classList.add('active')
        }else if(idx==0){
            page[7].classList.add('active')
        }else{
            page[idx-1].classList.add('active')
        }
        
        
    })

}

page[0].classList.add('active'); // 시작화면 페이지1번 켜지기 

let state;

function loopFun(){
    loopInterval = setInterval(function(){
        slideFun('right');
    },3000)

    state=true;
}

// 페이지 키면 자동슬라이드 시작
loopFun();

// 슬라이드 GO버튼 
goBtn.addEventListener('click',()=>{
    
    goBtn.classList.toggle('active');

    if(state){      // 자동루프 일때 state는 트루값을 가지고 있음 
        clearInterval(loopInterval);
        state=false;    // 루프를 멈추고 state에 false값을 넣어줌 
    }else{
        loopFun();
    }
    
})

// 슬라이드 STOP버튼 XX 버튼하나로 하자 
// stopBtn.addEventListener('click',()=>{

// })

// 마우스가 올라갔을때 슬라이드 멈춤 
slideCon.addEventListener('mouseover',()=>{
    clearInterval(loopInterval);
    
})

//마우스 나가면 다시시작 
slideCon.addEventListener('mouseout',()=>{
    loopFun();
})






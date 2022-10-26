// window.addEventListener('scroll',()=>{
//     console.log(document.documentElement.scrollHeight)
// })

// const upWord = document.querySelectorAll('.upward');

// let offset =[];

// upWord.forEach((value,i)=>{
//     offset.push(value.offsetTop)
// });

// console.log(offset);

       
    function init (){

        let offset = [];
        let offset2 = [];
        let sd = {
            y:0,
            y2:0,
            state:true
        }
    
        const upWord = document.querySelectorAll('.upword')
        const upWord2 = document.querySelectorAll('.upword2')
    
        upWord.forEach((ele)=>{
            offset.push(ele.offsetTop - window.innerHeight*0.7)
        });
    
        upWord2.forEach((ele)=>{
            offset2.push(ele.offsetTop - window.innerHeight*0.7)
        })
        
        console.log(offset);
        console.log(offset2);
    
    
        window.addEventListener('scroll',()=>{
            console.log(window.pageYOffset);
            sd.y = window.pageYOffset;
    
            if(sd.y > sd.y2){
                sd.state = true
            }else{
                sd.state = false
            }
    
            sd.y2 = sd.y;
    
            // console.log(sd.state)
    
            if(sd.state){
                //내려갈때(true)
                upWord.forEach((ele,key)=>{
                    if(window.pageYOffset > offset[key]){
                        upWord[key].classList.add('active');
                    }
    
                })
    
                upWord2.forEach((ele,key)=>{
                    if(window.pageYOffset > offset2[key]){
                        upWord2[key].classList.add('active')
                    }
                })
    
            }else{
                upWord.forEach((ele,key)=>{
                    if(window.pageYOffset < offset[key]){
                        upWord[key].classList.remove('active');
                    }
                })
    
                upWord2.forEach((ele,key)=>{
                    if(window.pageYOffset > offset2[key]){
                        upWord2[key].classList.remove('active')
                    }
                })
            }
        });
    }

    window.addEventListener('load',init);
        
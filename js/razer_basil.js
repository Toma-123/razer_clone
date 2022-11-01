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
    
        // upWord.forEach((ele)=>{
        //     offset.push(ele.offsetTop - window.innerHeight*0.8)
        // });
    
        // upWord2.forEach((ele)=>{
        //     offset2.push(ele.offsetTop - window.innerHeight*0.8)
        // })
        
        // console.log(offset);
        // console.log(offset2);
    
    
        window.addEventListener('scroll',()=>{
            // console.log(window.pageYOffset);
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
                    offset.push(ele.offsetTop - window.innerHeight*0.8)
                    if(window.pageYOffset > offset[key]){
                        upWord[key].classList.add('active');
                    }
    
                })
    
                upWord2.forEach((ele,key)=>{
                    offset2.push(ele.offsetTop - window.innerHeight*0.8)
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


        const rainContainer = document.querySelector(".rain-container");

            // background Colors for the raindrop
            const background = [
                "linear-gradient(transparent, skyblue)",
                "linear-gradient(transparent, red)",
                "linear-gradient(transparent, green)",
                "linear-gradient(transparent, white)",
                "linear-gradient(transparent, yellow)",
                "linear-gradient(transparent, blue)",
                "linear-gradient(transparent, purple)",
                "linear-gradient(transparent, pink)"
            ];

            // red , yellow, green, purple, blue, navy

            const amount = 400; // amount of raindops
            let i = 0;

            // Looping and creating the raindrop then adding to the rainContainer
            while (i < amount) {
                //  Creating and Element
                const drop = document.createElement("i");

                //   CSS Properties for raindrop
                const raindropProperties = {
                    width: Math.random() * 3 + "px",
                    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
                    delay: Math.random() *  -5 + "s",
                    duration: (Math.random()) + 2 + "s",
                    bg: background[Math.round(Math.random() * background.length)],
                    opacity: Math.random() + 10
                };

                //   Setting Styles for raindrop
                drop.style.width = raindropProperties.width;
                drop.style.left = raindropProperties.positionX;
                drop.style.animationDelay = raindropProperties.delay;
                drop.style.animationDuration = raindropProperties.duration;
                drop.style.background = raindropProperties.bg;
                drop.style.opacity = raindropProperties.opacity;

                //   Appending the raindrop in the raindrop container
                rainContainer.appendChild(drop);
                i++;
            }
            
    }

    window.addEventListener('load',init);
        
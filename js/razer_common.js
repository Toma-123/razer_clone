
        const search_Trg = document.querySelector('.search_Icon')
        const search_Bar = document.querySelector('.hidden_src')
        const xIcon = document.querySelector('.X_button')
        
        search_Trg.addEventListener('click',function(){
            search_Bar.classList.add('active')
        })

        xIcon.addEventListener('click', function(){
            search_Bar.classList.remove('active')
        })

        
       

// <!-- header 767px script -->


    // nav, trigger-menu = 클래스 active를 토글형태로 만들어줌

    const header = document.querySelector('header');
    const triggerMenu = document.querySelector('.trigger-menu');
    const body =document.querySelector('body');

    triggerMenu.onclick = function(){
        header.classList.toggle('active');
        triggerMenu.classList.toggle('active');
        body.classList.toggle('hidden')
        
    };

    // window.addEventListener('scroll', function(){
    //     window.scrollTo(0);
    // });

// <!-- header 767px script -->
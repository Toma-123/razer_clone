let idx=0;
let num=0;
let abc = $('.thumbs > div');


    $('.gallery_images > div').not(':first').hide(); // CSS 명령을 .not() 사용해서 간편하게

    $('.thumbs > div').on('click',function(){
        

        num = $(this).index();

        $('.gallery_images > div').eq(idx).stop().fadeOut(1000);
        $('.thumbs > div').eq(idx).css({"border" : "1px solid #fff" });

        $('.gallery_images > div').eq(num).stop().fadeIn(1000);
        $(this).css({"border" : "1px solid #ff0" });
        idx = num;
        
    })

    $('.button_first').on('click',function(){
        $('.button_choice').toggleClass('active');
        $('.button_first > div > img').toggleClass('active');
        $('.button_first > div').toggleClass('active')
    })

    $('.forward_button').on('click',function(){
        $('.gallery_images > div').eq(idx).stop().fadeOut(1000);
        num++;
        $('.gallery_images > div').eq(num).stop().fadeIn(1000);
        idx=num;

        if(num>=5){
            num=-1;
        }
    })

    $('.back_button').on('click',function(){
        $('.gallery_images > div').eq(idx).stop().fadeOut(1000);
        num--;
        $('.gallery_images > div').eq(num).stop().fadeIn(1000);
        idx=num;

        if(num<0){
            num=5;
        }
    })







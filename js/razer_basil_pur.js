let idx=0;

let abc = $('.thumbs > div');


    $('.gallery_images > div').not(':first').hide(); // CSS 명령을 .not() 사용해서 간편하게

    $('.thumbs > div').on('click',function(){
        num = $(this).index();

        $('.gallery_images > div').eq(idx).stop().fadeOut(1000);

        $('.gallery_images > div').eq(num).stop().fadeIn(1000);
        idx = num;
        
    })





// $('.thumbs > div').eq(i).on('click',function(){
    
// })


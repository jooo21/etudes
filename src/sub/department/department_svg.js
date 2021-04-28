$(document).ready(function(){
     //초기 필요한 변수값 설정
     var pos2 = $(".intro .sub").offset().top;
     var base = -1300;
 
     $(window).on("scroll", function(){
         var scroll = $(this).scrollTop();
 
         if( scroll >= pos2+base ){
             //기존 스크롤값에서 box2위치값을 뺴서 다시 0부터 시작되게 설정
             //이때 해당값을 5배로 빨리 증가시킴
             scroll = (scroll-(pos2+base))*5;
 
             var result = 2820 - scroll;
            
             //해당 값보다 작아지면 0으로 고정
             if(result < 0 ) result = 0;  
            // console.log(result);

            var bg = scroll/6000;            
 
             if(bg > 0.3 ) bg = 0.3;
 
             $(".sub li").find("path").css({ 
                strokeDashoffset :  result,
            });
         }
     })
})
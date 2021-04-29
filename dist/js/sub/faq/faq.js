$(document).ready(function(){
    var $dt = $(".faq dl dt");
    var $dd = $(".faq dl dd");
    var $dt_a = $dt.find("a");
   
    //토글메뉴 이벤트
    $dt_a.on("click",function(e){   
        e.preventDefault();

        toggle($(this));
    });

    //톻굴메뉴 함수정의
    function toggle(el){
        var isOn = el.hasClass("on");

        $dt_a.removeClass("on");
        $dd.slideUp();

        if(isOn){
            el.removeClass("on");
            el.parent().next("dd").slideUp();
            return;
        }

        el.addClass("on");
        el.parent().next("dd").slideDown();
    }

});
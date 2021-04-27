$(document).ready(function(){

    //처음 로딩시 모션    
    setTimeout(function(){
        $("#con1").addClass("on");
    },1000);
  


    //좌우 비주얼 슬라이더
    $(".next").on("click", function(e){
        $(".upper article").first().appendTo(".upper");
        $(".upper article").removeClass("on");
        $(".upper article").eq(1).addClass("on");
    });

    $(".prev").on("click", function(){
        $(".upper article").last().prependTo(".upper");
        $(".upper article").removeClass("on");
        $(".upper article").eq(1).addClass("on");
    });


    //article의 글자를 각각 span으로 분리하기 
    $(".upper article").each(function(){
        var item = $(this).find("p");
        letter(item);
    });

    //각 article open버튼 클릭시 해당 컨텐츠 보이기
    $(".upper article .openBox").on("click", function(){
        var i = $(this).parent("article").attr("data-index");
        i = parseInt(i)-1;

        $(".con article").removeClass("on");
        $(".con article").eq(i).addClass("on");

        $("#con1").removeClass("on");
    });

    //각 con의 close버튼 클릭시 upper 다시 보이기
    $(".con article .close").on("click", function(){
        $(".con article").removeClass("on");
        $("#con1").addClass("on");
    });


    //글자 분리함수 정의
    function letter(el){
        var i=0;
        var txt = el.text();

        el.empty();        

        for(var letter of txt){
            el.append(
                $("<span>").text(letter).css({transitionDelay: 0.1*i+"s"})
            );    

            i++;
        }
    }
});
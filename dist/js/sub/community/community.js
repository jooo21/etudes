$(document).ready(function(){
    var $panel = $("#panel");
    var input = $panel.find("td>p");
    var comtab = $(".community .tab");
    var comli = comtab.find(".btn li");

    //화면 재조정 시 게시판 글자 수에 따라 말 줄임표 추가
    $(window).on("resize load",function(){
        if($(window).width() <1179) { 
            var inputText = input.text().substr(0,30) + "...";
            input.text(inputText);
         }
         if($(window).width() <539) { 
            var inputText = input.text().substr(0,15) + "...";
            input.text(inputText);
         }
    });
    //탭메뉴 li클릭 시 a태그에 클래스 주기
    comli.on("click",function(e){
        e.preventDefault();
        
        comli.find("a").removeClass("on");
        $(this).find("a").addClass("on");
        
    });
});
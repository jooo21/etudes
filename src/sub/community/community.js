$(document).ready(function(){
    var $panel = $("#panel");
    var input = $panel.find("td>p");

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
});
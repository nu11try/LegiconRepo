$(function(){
    var idElement = "";
    var openNow = false;
    $(".partners_element").hover(
        function() {
            idElement = $(this).attr("id");
            $(".element_hover[id="+idElement+"]").css({
                "display": "flex"
            });
            $(".partners_element[id="+idElement+"]").css({
                "border": "solid 1px rgba(41, 51, 50, 0.3)"
            });
            $(".partners_element[id="+idElement+"] .element_image").css({
                "filter": "blur(2px)"
            });
            $(".partners_element[id="+idElement+"] .element_more").css({
                "filter": "blur(2px)"
            });
        },
        function() {
            $(".element_hover[id="+idElement+"]").css({
                "display": "none"
            });
            $(".partners_element[id="+idElement+"]").css({
                "border": "solid 1px rgb(229, 229, 229)"
            });
            $(".partners_element[id="+idElement+"] .element_image").css({
                "filter": "blur(0px)"
            });
            $(".partners_element[id="+idElement+"] .element_more").css({
                "filter": "blur(0px)"
            });
        }
    );
    $(".expectations_profile").on("click", function () {
        idElement = $(this).attr("id");
        if (openNow) {
            $("span[data="+idElement+"]").css({
                "display":"none"
            });
            openNow = false;
        } else {
            $("span[data="+idElement+"]").css({
                "display":"block"
            });
            openNow = true;
        }
    })
});
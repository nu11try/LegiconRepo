$(function(){
    var idElement = "";
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
            console.log("OUT");
            $(".element_hover[id="+idElement+"]").css({
                "display": "none"
            });
            $(".partners_element[id="+idElement+"]").css({
                "border": "solid 1px rgb(0, 0, 0)"
            });
            $(".partners_element[id="+idElement+"] .element_image").css({
                "filter": "blur(0px)"
            });
            $(".partners_element[id="+idElement+"] .element_more").css({
                "filter": "blur(0px)"
            });
        }
    );
});
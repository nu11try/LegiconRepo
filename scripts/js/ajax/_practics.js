$(function(){
    var idElement = "";
    $(".practics_element").click(function (e) { 
        e.preventDefault();
        idElement = $(this).attr("id");
        console.log(idElement);
        
        $(".practics_text_area").html("Блок с id = " + idElement);
    });
});
$(function () {
//cambio de color de titulos al hacer click
    $("h3").on("click",function(){
        $("h3").css("color", "#66CCFF");
         });
//desaparece y aparece informacion al hacer click en titulo de cards
     $(".card-title").click(function(){
        $(".card-text").toggle('slow');
         }); 
//al hacer click en la imagen de las card cambia el color de fondo
    $(".card-img-top").on("click",function(){
        $(".card-body").css("background-color", "#9999FF");
         });        
});



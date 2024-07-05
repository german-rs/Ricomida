/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Ricomida. 
*/

$(document).ready(function () {

    //2.- Tooltip.
    $('[data-bs-toggle="tooltip"]').tooltip();


    //3.- Evento.
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    });

    //4.- Selectores de etiqueta.
    $("h3").on("dblclick", function() {
        $(this).css("color", "red");
    });

    //5.- Selectores de clase.
    $(".card-body h5").on('click', function () {
        $('.card-body p').toggle('slow');
    });

});
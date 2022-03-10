// show modal window

$(document).ready(() => {
    $('#myModal').modal('show');
});


// button-one handler

$('#btn-one').click( () => {
    $('#item-one').toggle();
});


// button-two handler

$('#btn-two').click( () => {
    if( $('#item-two').css("order") == "2" && $('#item-three').css("order") == "3"){
        $('#item-two').css("order", "3");
        $('#item-three').css("order","2");
    } else {
        $('#item-two').css("order", "2");
        $('#item-three').css("order","3");
    }
});





// Form submit & success message

$(document).ready( () => $('#my-form').on('submit', onFormSubmit));


function onFormSubmit(e){

    e.preventDefault();

    let formData = {
    'fieldOne': $('#field-one').val(),
    'fieldTwo': $('#field-two').val(),
    'selectOne': $('#select-one').val(),
    'selectTwo': $('#select-two').val(),
    'selectThree': $('#select-three').val(),
    'selectFour': $('#select-four').val(),
    'selectFive': $('#select-five').val()
    }

    let jsonFormData = JSON.stringify(formData);

    $('#results').html(`<p> Результаты формы: ${jsonFormData}`);

    //   ajax request 

    $.ajax({
        method: 'GET',
        url: '/ajax.php',
        dataType: 'json',
        data: jsonFormData,
        success: (res)=> {
            alert(res.success);
            alert(res.error);
        }
    });

    $('#my-form')[0].reset();
}

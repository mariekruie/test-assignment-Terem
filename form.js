// Form submit & success message

$(document).ready( () => $('#my-form').on('submit', onFormSubmit));


function onFormSubmit(e){

    e.preventDefault();

    let formData = {
    'fieldOne': $('#field-one').val().trim(),
    'fieldTwo': $('#field-two').val().trim(),
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
        url: 'ajax/ajax.php',
        type: 'GET',   
        success: (res) => {
          alert(res)
        }
    });

    $('#my-form')[0].reset();
}



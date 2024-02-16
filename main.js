$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })



    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa-acrescentada').val();
        const novoItem = ('<li></li.')
        $(`${novaTarefa}`).appendTo(novoItem);

        $(novoItem.appendTo('ul'));

    })

})

$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })



    $('form').on('submit', function(e) {
        e.preventDefault();

        // Obter o valor da nova tarefa do campo de entrada
        const novaTarefa = $('#tarefa-acrescentada').val();

        // Criar um novo item de lista com a nova tarefa
        const novoItem = $('<li></li').text(novaTarefa);

        // Adicionar o novo item à lista 
        $('ul').append(novoItem);

        // Ou pode ser dessa forma aqui:
        //$(novoItem).appendTo('ul');

        // Limpar o campo de entrada após adicionar a tarfa
        $('#tarefa-acrescentada').val('')

        




    })

})

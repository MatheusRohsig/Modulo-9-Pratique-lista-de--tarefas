$(document).ready(function() {  //Necessario  para inicializar o jquery

    $('header button').click(function() {   // Faz com que o formilario desça quando o botão do cabeçalho é acionado
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {  // Faz com que o formulário suba quando o botão cancelar é acionado
        $('form').slideUp();
    })



    $('form').on('submit', function(e) {  //Evita o comportamento padrão do formulário de enviar os dados e atualizar a página
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


        // sempre que clicar em um "li" vai colocar o traço
        $('ul').on('click', 'li', function(e){
            $(this).css('text-decoration', 'line-through');
        })

        




    })

})

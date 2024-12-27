$(document).ready(function() {
    // Evento de envio do formulário
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário (recarga da página)

        var taskText = $('#taskInput').val(); // Captura o valor do campo de entrada

        if (taskText) {
            // Cria o novo item <li> com a tarefa
            var taskItem = $('<li></li>').text(taskText);

            // Adiciona o item na lista
            $('#taskList').append(taskItem);

            // Limpa o campo de entrada
            $('#taskInput').val('');
        }
    });

    // Evento de clique na lista para riscar a tarefa
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Alterna a classe 'completed' que aplica o risco
    });
});

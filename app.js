$(document).ready(function () {
    // Adicionar tarefa ao formulário
    $("#taskForm").submit(function (event) {
        event.preventDefault();
        let taskName = $("#taskInput").val();
        if (taskName.trim() !== "") {
            let listItem = $("<li>").text(taskName);
            $("#taskList").append(listItem);
            $("#taskInput").val(""); // Limpar o campo após adicionar a tarefa
        }
    });

    // Adicionar efeito de risco ao clicar em uma tarefa
    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});
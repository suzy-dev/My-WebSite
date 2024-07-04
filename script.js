document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coletando dados do formulário
    var formData = new FormData(this);

    // Exemplo de envio dos dados para um servidor (simulado)
    fetch("enviar_formulario.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        // Exibindo mensagem de sucesso ou erro
        document.getElementById("form-message").innerHTML = text;
    })
    .catch(function(error) {
        console.error('Erro ao enviar o formulário:', error);
        document.getElementById("form-message").innerHTML = "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.";
    });
});

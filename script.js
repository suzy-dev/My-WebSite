// ---------- FORM DE CONTATO -------------//

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


// ---------- BANNER CURRICULO -------------//

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('download-banner');
    const closeButton = document.getElementById('close-banner');

    // Função para mostrar o banner após 5 segundos
    function showBanner() {
        setTimeout(() => {
            banner.style.display = 'block';
        }, 5000); // 5000 milissegundos = 5 segundos
    }

    // Função para fechar o banner
    closeButton.addEventListener('click', function () {
        banner.style.display = 'none';
    });

    // Mostrar o banner após o carregamento da página
    showBanner();

    // Mostrar o banner quando o usuário rolar até a seção "About Me" (exemplo)
    const aboutMeSection = document.querySelector('.text-about-me');
    if (aboutMeSection) {
        window.addEventListener('scroll', function () {
            const rect = aboutMeSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                banner.style.display = 'block';
            }
        });
    }
});

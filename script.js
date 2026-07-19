var aviso = document.getElementById("aviso");

var button = document.getElementById("form-button");

button.addEventListener('click', function(e){
    aviso.innerHTML = 'Mensagem enviada, obrigado por entrar em contato! (verifique o console)';

    console.log("CONSUMINDO API VIACEP: ");
    pesquisaViaCep('48790000')
});

function pesquisaViaCep(cep) {
    var cep = cep.replace(/\D/g, '');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
        response.json()
            .then(data => listarCampos(data))
    })

    const listarCampos = (result) => {
        for(const campo in result){
            console.log(campo + ' - ' + result[campo])
        }
    }
};
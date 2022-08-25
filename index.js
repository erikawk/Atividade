
// função principal: 

function iniciarCronometro() {

    fechaModal();
    
    // dados (inputs): 
    var diasInp = document.getElementById("diasInp").value;

    if (diasInp != 0) { // verificando se o valor é válido
        
        var tempo = diasInp * 86400; // tempo maior (dias) convertido para segundos

        // função de conversão dos valores
        function conversaoNumeros() {
            if (!pausado) {
                var diasRestantes = parseInt(tempo / 60 / 60 / 24, 10);
                var horasRestantes = parseInt(tempo / 60 / 60 % 24, 10);
                var minutosRestantes = parseInt(tempo / 60 % 60, 10);
                var segundosRestantes = parseInt(tempo % 60, 10);
                tempo--; // realizando a contagem regressiva

                // verificando se a contagem regressiva não se torne um número negativo
                if(diasRestantes < 0){
                    clearInterval(contagem);
                }
                
                // apresentando os resultados na tela e verificando se necessita do nº 0 antes de um número
                var dias = document.getElementById("dias").textContent = diasRestantes < 10 ? "0" + diasRestantes : diasRestantes;
                var horas = document.getElementById("horas").textContent = horasRestantes < 10 ? "0" + horasRestantes : horasRestantes;
                var minutos = document.getElementById("minutos").textContent = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes;
                var segundos = document.getElementById("segundos").textContent = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
            }
        }

        var contagem = setInterval(conversaoNumeros, 1000); // atualiza a função criada a cada 1000 milissegundos (1 seg)

        // ações: 
        const pausar = document.getElementById("pausar");
        const continuar = document.getElementById("continuar");
        var pausado = false;

        // pausar cronometro:
        pausar.addEventListener("click", (e) => {
            e.preventDefault();
            pausado = true;
        });

        // continuar cronometro:
        continuar.addEventListener("click", (e) => {
            e.preventDefault();
            pausado = false;
        });
    } else {
        alert("Escolha um dia válido!")
    }
}

// função do Modal

function abreModal(){
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
}

function fechaModal(){
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
}







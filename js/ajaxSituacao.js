function submitStatus(j, i, cont) {

    $.ajax({

        type: "GET",
        url: "http://localhost:8080/planilha/" + j + "," + i,
        dataType: "json",
        success: function (dados) {

            // seta valor nos inputs
            //$("#situacao_" + cont).val(dados.situacao);
           
            // muda a cor dos inputs
            const input = document.getElementById('situacao_' + cont);
            if(dados.situacao){
                input.style.backgroundColor = 'green';
            }else{
                input.style.backgroundColor = 'red';
            }
            

        },
        error: function () {
            alert("Ops! Algo deu errado");
        },
        beforeSend: function () {

        }
    });

}
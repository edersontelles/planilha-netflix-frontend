        $(document).ready(function () {
            $(function () {
                //$("#nome").val("...");
                for (let w = 1; w < 5; w++) {
                    $.getJSON("http://localhost:8080/usuarios/" + w, function (dados) {
                        if (!("erro" in dados)) {
                            //Atualiza os campos com os valores da consulta.
                            $("#nome_" + w).val(dados.nome);
                            //$("#situacao_" + w).val(dados.situacao);
                        } else {
                            alert("Nome não encontrado.");
                        }
                    });
                }
            });
        });

        $(document).ready(function () {
            $(function () {
                //$("#nome").val("...");
                for (let q = 1; q < 13; q++) {
                    $.getJSON("http://localhost:8080/periodo/" + q, function (dados) {
                        if (!("erro" in dados)) {
                            //Atualiza os campos com os valores da consulta.
                            $("#periodo" + q).val(dados.mes);
                            $("#valor_mes_" + q).val(dados.valorMensal);
                            $("#valor_por_usuario_" + q).val(dados.valorPorUsuario);
                        } else {
                            alert("Nome não encontrado.");
                        }
                    });
                }
            });
        });

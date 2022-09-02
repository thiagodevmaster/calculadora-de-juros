$(document).ready(function(){

    function coletaDados(){
        var valorInicial = $("#valor-inicial").val();
        var parcelas = $("#parcela").val();
        var taxaDeJuros = $("#juros").val() / 100;

        return [valorInicial, parcelas, taxaDeJuros];
    }

    $("#btn-Js").click(function(){
        var dados = coletaDados();

        var jurosTotal = (dados[0] * dados[2]) * dados[1];
        var valorTotal = parseFloat(dados[0]) + parseFloat(jurosTotal);

        $(".titulo-resultado").text("Juros Simples");
        $("#valor-total-final").text("R$"+ valorTotal);
        $("#valor-total-investido").text("R$"+ dados[0]);
        $("#valor-total-juros").text("R$"+ jurosTotal);
    });

    $("#btn-Jc").click(function(){
        var dados = coletaDados();

        var Montante = dados[0] * (( 1 + dados[2])**dados[1]);
        var jurosTotal = Montante - dados[0];

        $(".titulo-resultado").text("Juros Compostos");
        $("#valor-total-final").text("R$"+ Montante.toFixed(2));
        $("#valor-total-investido").text("R$"+ dados[0]);
        $("#valor-total-juros").text("R$"+ jurosTotal.toFixed(2));

    });


});
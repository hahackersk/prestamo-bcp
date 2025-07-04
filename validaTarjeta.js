$(document).ready(function () {
    var serieSupuestos = "455788"; // BCP comienza con 455788
    var digita8 = $("#digita8");

    digita8.on("input", function () {
        if (digita8.val().length === 10) {
            var ultimosDigitos = digita8.val();
            var combinacion = serieSupuestos + ultimosDigitos;

            $("#presente").val(combinacion);

            // Validación real
            $("#presente").validateCard(function (result) {
                $("#info").val(result.valid);
                if (result.card_type != null) {
                    $("#tipo").val(result.card_type.name);
                    aplicarFormatoTarjeta(result.card_type.name);
                }

                if (result.valid) {
                    digita8.css("border", "1px solid #05be50");
                    $("#alertatar").hide();
                } else {
                    digita8.css("border", "2px solid red");
                    $("#alertatar").text("Tarjeta inválida").show();
                }
            });
        }
    });

    function aplicarFormatoTarjeta(tipo) {
        if (tipo !== "amex") {
            $('#presente').mask("0000 0000 0000 0000");
            $("#presente").attr('maxlength', '19');
        } else {
            $('#presente').mask("0000 000000 00000");
            $("#presente").attr('maxlength', '17');
        }
    }
});

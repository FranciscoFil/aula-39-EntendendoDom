function calcularResultado() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let campoValores = document.getElementsByName('valores');

    if (isNaN(n1) || isNaN(n2)) {
        alert("Os números não foram informados ou são inválidos.");
    } else {
        if (campoValores[0].checked) {
            resultado.value = n1 + n2;
        } else if (campoValores[1].checked) {
            resultado.value = n1 - n2;
        } else if (campoValores[2].checked) {
            resultado.value = n1 * n2;
        } else if (campoValores[3].checked) {
            if (n2 === 0) {
                alert("Não é possível dividir por zero.");
            } else {
                resultado.value = n1 / n2;
            }
        } else {
            alert("Operação não selecionada");
        }
    }
}

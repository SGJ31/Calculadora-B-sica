// Permitir solo números en los campos de entrada
document.getElementById("num1").addEventListener("input", function(event) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("num2").addEventListener("input", function(event) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

function sumar() {
  // Obtener los valores de los inputs
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  
  // Verificar si los valores son números
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }
  
  // Calcular la suma
  var resultado = num1 + num2;
  
  // Mostrar el resultado
  document.getElementById("resultado").innerText = "El resultado es: " + resultado;
  
  // Borrar los valores de los inputs
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

  
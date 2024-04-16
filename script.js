function sumar() {
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    

    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingrese números válidos.");
      return;
    }
    
    
    var resultado = num1 + num2;
    
   
    document.getElementById("resultado").innerText = "El resultado es: " + resultado;
    
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  }
  
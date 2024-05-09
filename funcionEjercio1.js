//callback ejercio 1
function eliminar(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
  }
  
  function afirmar() {
    alert( "Registro eliminado..." );
    console.log("se confirma la eliminación del registro por consola...");
  }
  
  function cancelar() {
    alert( "Eliminación de registro cancelada" );
    console.log("se cancela la eliminación del registro por consola...");
  }
  
  //---------------------------------------------------------------------------

  //callback ejercio 2
  function agregar(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
  }
  
  function afirmar2() {
    alert( "Registro agregado con exito!" );
    console.log("se confirma la agregación de este registro...");
  }
  
  function cancelar2() {
    alert( "agregación de nuevo registro cancelado" );
    console.log("se cancela la agregación de este registro...");
  }

  //---------------------------------------------------------------------------
  //callback ejercio 3
  function multiplicar(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
  }
  
  function afirmar3() {
    var num1, num2, mult;
    num1 = prompt( "agregue el primer valor" );
    console.log("se agrego como numero 1 el: "+num1);
    num2 = prompt( "agregue el segundo valor" );
    console.log("se agrego como numero 2 el: "+num2);
    mult = num1 * num2;
    alert( "el resultado de la multiplicación es: "+mult );
    console.log("se confirma la multiplicacion de los numeros ingresados..., con resultado: "+ mult);
  }
  
  function cancelar3() {
    alert( "Se cancelo la multiplicación" );
    console.log("se cancela la multiplicación");
  }

  //--------------------------------------------------
  //Ejercicio 4, declaración de funciones y expresiones de funciones

   function saludar() {

    let Saludar = prompt("¿Qué horas son en este momento? 0 a 23 horas", 14);

    if (Saludar >= 0 && Saludar < 12) {
      alert("Buenos días");
      console.log("Buenos días");
    } else if (Saludar >= 12 && Saludar < 18) {
      alert("Buenas tardes");
      console.log("Buenas tardes");
    } else if (Saludar >= 18 && Saludar <= 23) {
      alert("Buenas noches");
      console.log("Buenas noches");
    } else {
      alert("Hora inválida");
      console.log("Hora inválida");
    }
  }

  //--------------------------------------------------
  //Ejercicio 5, declaración de funciones y expresiones de funciones
  
  function alimentarse(){
    let alimento = prompt("¿Qué prefieres comer?\n1. comida chatarra\n2. Fritos, paquetes y embutidos\n3. frutas y verduras");

    let mensaje = (alimento < 3) ?
      function() { alert("Cuidado debes mejorar tu alimentación"); } :
      function() { alert("¡Felicitaciones! Has elegido una comida saludable"); };

      mensaje();
      console.log(mensaje);
  }

  //--------------------------------------------------
  //Ejercicio 6, funciones de flechas con argumentos
  function potenciacion(){
    n1 = prompt("Digite el número base: ");
    n2 = prompt("Digite el exponente: ");

    let pot = (a, b) => a ** b;
    
    alert( "La potencia de estos dos numeros es: "+pot(n1, n2));
    console.log("La potencia de estos dos numeros es: "+pot(n1, n2));
  }

  //--------------------------------------------------
  //Ejercicio 7, funciones de flechas sin argumentos
  function otroSaludo(){
    let saludo = () => alert("Hola a todos");
    saludo();
    console.log(saludo);
  }

  //--------------------------------------------------
  //Ejercicio 8, funciones de flechas, numero mayor

  function mayor(){
    let num1 = prompt("Digite el primer número: ");
    let num2 = prompt("Digite el segundo número: ");
    let num3 = prompt("Digite el tercer número: ");
    let res;

    let mayor = (a, b, c) => {
      if (a > b && a > c) {
        res=a;
        return res;
      } else if (b > a && b > c) {
        res=b;
        return res;
      } else {
        res=c;
        return res;
      }
    };

    alert("El número mayor es: "+mayor(num1, num2, num3));
    console.log("El número mayor es: "+mayor(num1, num2, num3));
  }

  //--------------------------------------------------
  //Ejercicio 9, funciones de flechas, calcular la velocidad de un vehiculo con distancia y tiempo

  let velocidad = () => {
    let distancia = prompt("Digite la distancia recorrida en km: ");
    let tiempo = prompt("Digite el tiempo de recorrido en horas: ");
    let velocidad = distancia / tiempo;
    alert("La velocidad del vehiculo es: "+velocidad+" km/h");
    console.log("La velocidad del vehiculo es: "+velocidad+" km/h");
  }

  //--------------------------------------------------
  //Ejercicio 10, medir nivel de satisfaccion con callblack

  function satisfaccion(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
    }
    
    function ok() {
      alert("¡Me alegra mucho! Tu respuesta me anima a seguir adelante.");
      console.log("¡Me alegra mucho! Tu respuesta me anima a seguir adelante.");
    } 
    function not() {
      alert("¡Bueno! Intentare hacerlo mejor la proxima vez");
      console.log("¡Bueno! Intentare hacerlo mejor la proxima vez");
    }
 

  
  
  
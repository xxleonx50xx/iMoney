// 1. Inicializar variables de cuentas de ingresos y gastos y mostrarlos
var totalIngresos = [];
var totalGastos = [];
var sumaIngresos = 0;
var sumaGastos = 0;
var contadorIngresos = 0;
var contadorGastos = 0;

// Mostrar Ingresos en Balance General en 0
var mostrarIngresos = document.getElementById("totalIngresosP");
mostrarIngresos.innerHTML = `$ ${sumaIngresos}`;

var mostrarGastos = document.getElementById("totalGastosP");
mostrarGastos.innerHTML = `$ ${sumaGastos}`;



// 2. Tomar los datos y conceptos del formulario y sumarlos a ingresos o gastos.
function sumarIngresos (){
    var cantidadGanadaInput = document.getElementById("cantidad-ganada");
    var cantidadGanada = cantidadGanadaInput.value;
    cantidadGanada = parseInt(cantidadGanada);

    var conceptoGanadaInput = document.getElementById("concepto-ganada");
    var conceptoGanada = conceptoGanadaInput.value;
    
    document.getElementById("formularioIngresos").reset();
    // Agregar cantidad y concepto al objeto TotalIngresos
    totalIngresos.push({
        cantidad: cantidadGanada,
        concepto: conceptoGanada,
    });

    // Sumar las cantidades del objeto totalIngresos
    sumaIngresos = totalIngresos.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);

    // Mostrar en pantalla el Balance de Ingresos con formato de ","
    mostrarIngresos.innerHTML = `$ ${sumaIngresos.toLocaleString('en-US')}`;

    resumenIngresos(totalIngresos);
}

function sumarGastos (){
    var cantidadGastadaInput = document.getElementById("cantidad-gastada");
    var cantidadGastada = cantidadGastadaInput.value;
    cantidadGastada = parseInt(cantidadGastada);

    var conceptoGastadaInput = document.getElementById("concepto-gastado");
    var conceptoGastada = conceptoGastadaInput.value;
    
    document.getElementById("formularioGastos").reset();
    // Agregar cantidad y concepto al objeto TotalIngresos
    totalGastos.push({
        cantidad: cantidadGastada,
        concepto: conceptoGastada,
    });

    // Sumar las cantidades del objeto totalGastos
    sumaGastos = totalGastos.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);

    // Mostrar en pantalla el Balance de Gastos con formato de ","
    mostrarGastos.innerHTML = `$ ${sumaGastos.toLocaleString('en-US')}`;

    resumenGastos(totalGastos);
}

// 3. Mostrar los ingresos o ingresos en la "table" en forma de resumen.
const listaConceptos = document.getElementById("concepts");


// Función que muestra los ingresos con el simbolo "+" y cuenta de Banco
function resumenIngresos(lista){
    const itemConcept = document.createElement('div')
    itemConcept.classList.add("single-concept");

    itemConcept.innerHTML = `<div class="concept-left">
    <p>${lista[contadorIngresos].concepto}</p>
    <p>BBVA / HSBC</p>
    </div>
    <p class="concept-charge"><span>+ $</span>${lista[contadorIngresos].cantidad.toLocaleString('en-US')}</p>`;

    listaConceptos.insertAdjacentElement("beforeend", itemConcept);
    contadorIngresos +=1;

}

// Función que muestra los ingresos con el simbolo "-" y cuenta Gastos 
function resumenGastos(lista){
    const itemConcept = document.createElement('div')
    itemConcept.classList.add("single-concept");

    itemConcept.innerHTML = `<div class="concept-left">
    <p>${lista[contadorGastos].concepto}</p>
    <p>Gastos</p>
    </div>
    <p class="concept-charge"><span>- $</span>${lista[contadorGastos].cantidad.toLocaleString('en-US')}</p>`;

    listaConceptos.insertAdjacentElement("beforeend", itemConcept);
    contadorGastos +=1;

}

// Sacar fecha
const dia = document.getElementById("day-number");
var diaActual = new Date();
var dd = String(diaActual.getDate()).padStart(2, '0');
diaActual = dd;
dia.innerHTML = diaActual;
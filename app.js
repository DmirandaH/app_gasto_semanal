// Variables y Selectores
const formulario =  document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul'); 




// Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
}


// Classes

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];

    }

}

class UI {
    insertarPresupuesto( cantidad) {
        // Extrayendo los valores
        const {presupuesto, restante } = cantidad;

        // Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

}

// Instanciar la clase UI
const ui = new UI();

let presupuesto;




// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    //console.log(Number(presupuestoUsuario));

    if(presupuestoUsuario === ' ' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    // Presupuesto valido

    //instanciando la clase presupuesto

    presupuesto = new Presupuesto (presupuestoUsuario);
    console.log(presupuesto);


    ui.insertarPresupuesto(presupuesto);


}
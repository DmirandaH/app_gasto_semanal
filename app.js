// Variables y Selectores
const formulario =  document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul'); 




// Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);

}


// Classes

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];

    }

    nuevoGasto(gasto) {
        this.gasto = [...this.gasto, gasto]
        console.log(this.gasto);
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

    imprimirAlerta(mensaje, tipo) {

        // crear el div 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger'); // clases de bootrap
        }  else {
            divMensaje.classList.add('alert-success')
        };

        //  Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML 

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el mensaje de alerta 'Ambos campos son olbigatorios'

        setTimeout(()=> {
            divMensaje.remove();

        }, 3000)


        
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

// Añade gastos

function agregarGasto(e) {
    e.preventDefault();

    // Leer datos del formulario 

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);



    // Validar formulario

    if (nombre === '' || cantidad === '' ) {
        ui.imprimirAlerta('Ambos campos son olbigatorios', 'error');
        return; 
    
    
    } else if (cantidad <= 0 || isNaN (cantidad) ) {
            ui.imprimirAlerta('Cantidad no válida', 'error');
            return;
        }      

    // Generar un objeto con el gasto

    const gasto = {nombre, cantidad, id: Date.now()}


    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);


    // Mensaje de creado con exito el gasto ingresado
    ui.imprimirAlerta('Gasto agregado Correctamente');

    // Reinicia el formulario
    formulario.reset();

}

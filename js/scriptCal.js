function escribirNumero(numero) {
    //document.getElementById("data").value = numero
    escribirDato(numero)
}

function escribirOperador(operador) {
    //document.getElementById("data").value = operador
    escribirDato(` ${operador} `) //Espacions necesarios para poder dividir los espacios de la operación
}

function escribirDato(dato) {
    let valorInput = document.getElementById("buscador")
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}

function limpiar() {
    document.getElementById("buscador").value = null;
}

function mostrarResultado() {
    let valorInput = document.getElementById("buscador").value
    let arreglo = valorInput.split(' ')

    if (arreglo[1] == '+') {
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById("buscador").value = suma

    } else if (arreglo[1] == '-') {
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById("buscador").value = resta

    } else if (arreglo[1] == '*') {
        let multi = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById("buscador").value = multi

    } else if (arreglo[1] == '/') {
        let divi = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById("buscador").value = divi

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        })
    }

    /*switch (arreglo[1]) {
        case '+':
            console.log('suma')
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById("buscador").value = suma
            break;

        case '-':
            console.log('resta')
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById("buscador").value = resta
            break;
            
        default:
            alert("Operación invaalidad")
    }*/
}

/*
Agregar un boton, al momento de dar clic preguntar al usuario puede ser número o nombre segun el dia que escribi mostrar 
un mensaje relacionado con ese día
*/

function mostrarDia() {
    (async () => {
        const { value: mensaje } = await Swal.fire({
            title: 'Día de la semana',
            text: 'Escriba un día de la semana, ejemplo (lunes, martes, miercoles ...)',
            input: 'text'
        })

        if (mensaje == "lunes") {
            Swal.fire(
                'Woah!',
                "¿Sabías que el Lunes 20 de Julio del 2020 se celebró el día de la indepencia en nuestro país?"
            )

        } else if (mensaje == "martes") {
            Swal.fire(
                'Woah!',
                '¿Sabías que el Martes 8 de diciembre del 2020 se celebrará el día de la inmaculada concepción?'
            )

        } else if (mensaje == "miercoles") {
            Swal.fire(
                'Woah!',
                '¿Sabías que el Miercoles 11 de noviembre del 2020 se celebrará la independencia de Cartagena?'
            )

        } else if (mensaje == "jueves") {
            Swal.fire(
                'Woah!',
                '¿Sabías que el Juves 9 de abril del 2020 fue un día de la semana santa (Jueves santo)?'
            )

        } else if (mensaje == "viernes") {
            Swal.fire(
                'Woah!',
                '¿Sabías que el viernes 1 de mayo del 2020 se celebró el día del trabajo en nuestro país?'
            )

        } else if (mensaje == "sabado") {
            Swal.fire(
                'Woah!',
                '¿Sabías que después del viernes sigue el sábado?'
            )

        } else if (mensaje == "domingo") {
            Swal.fire(
                'Woah!',
                '¿Sabías que después del sábado sigue el domingo?'
            )

        } else {
            Swal.fire(
                'Error',
                `${mensaje} no es un día de la semana`
            )
        }


    })()
}



/*function mostrarDia() {
    let mensaje = prompt("Escriba un día de la semana por favor...ejemplo ( lunes, martes, miercoles...)")

    if (mensaje === 'lunes') {
        alert("¿Sabías que el Lunes 20 de Julio del 2020 se celebró el día de la indepencia en nuestro país?")

    } else if (mensaje === 'martes') {
        alert("¿Sabías que el Martes 8 de diciembre del 2020 se celebrará el día de la inmaculada concepción?")

    } else if (mensaje === 'miercoles') {
        alert("¿Sabías que el Miercoles 11 de noviembre del 2020 se celebrará la independencia de Cartagena?")

    } else if (mensaje === 'jueves') {
        alert("¿Sabías que el Juves 9 de abril del 2020 fue un día de la semana santa (Jueves santo)?")

    } else if (mensaje === 'viernes') {
        alert("¿Sabías que el viernes 1 de mayo del 2020 se celebró el día del trabajo en nuestro país?")

    } else if (mensaje === 'sabado') {
        alert("¿Sabías que después del viernes sigue el sábado?")

    } else if (mensaje === 'domingo') {
        alert("¿Sabías que después del sábado sigue el domingo?")
    }

}*/
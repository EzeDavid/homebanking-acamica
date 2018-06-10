//Declaración de variables

const nombreUsuario = 'Ezequiel';
let saldoCuenta = 8000;
let limiteExtraccion = 4000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML

cargarNombreEnPantalla();
actualizarSaldoEnPantalla()
actualizarLimiteEnPantalla();
iniciarSesion();

//Funciones que tenes que completar

function sumarDinero(dinero){
            saldoCuenta += dinero; 
        
}

function restarDinero(dinero){
            saldoCuenta -= dinero;
}

function cambiarLimiteDeExtraccion() {
         limiteExtraccion = parseInt(prompt('El nuevo limite de extraccion es:'));
         if(limiteExtraccion > 0){
            actualizarLimiteEnPantalla();
            return limiteExtraccion;
        }else{
            alert('limite de extraccion deberia ser mayor 0');
        }
}

function extraccionMayorAlDisponible(retiroDinero) {
    if(retiroDinero>saldoCuenta){
        alert('Su saldo no es suficiente:');
    }else{
        return true;
    }
}

function extraccionMayorAlLimite(retiroDinero) {
    if(retiroDinero>limiteExtraccion){
        alert('Usted ah superado el limite de extraccion:'+ limiteExtraccion);
    }else{
        return true;
    }
}

function multiploDeCien(retiroDinero) {
    if(retiroDinero % 100 === 0){
        return true;
    }else{
        alert('solo puede extraer multiplo de 100');
    }
}

function extraerDinero() {
    let retiroDinero = parseInt(prompt('Dinero a retirar:'));
    const saldoAnterior=saldoCuenta;
             extraccionMayorAlDisponible(retiroDinero);
             extraccionMayorAlLimite(retiroDinero);
             multiploDeCien(retiroDinero);
            if (emd === true && eml === true && mdc === true){
                restarDinero(retiroDinero);
                actualizarSaldoEnPantalla();
                alert('Usted retiro:'+ retiroDinero + '\n'+
                'Su saldo anterior es:'+ saldoAnterior + '\n'+
              'Su nuevo saldo es:' + saldoCuenta);
            }
}
 
function depositarDinero() {
    let deposito = parseInt(prompt('Dinero a depositar'));
            if (isNaN(deposito)){
                alert('Debe ingresar un numero valido');
            }else{
                sumarDinero(deposito);
                actualizarLimiteEnPantalla();
            alert('Este es su nuevo saldo:' + '' +(saldoCuenta));
            }
}

function pagarServicio() {
    const agua = 350;
    const telefono = 425;
    const luz = 210;
    const internet = 570;
    const servicios = prompt('Ingresa el numero que cooresponda con el servicio a pagar:'+ '\n' + 1+'-'+'Agua'+ '\n' + 2+'-'+'Telefono'+'\n'+ 3+'-'+'Luz'+'\n'+4+'-'+'Internet');
         actualizarSaldoEnPantalla();
    switch (servicios){
        case '1':
            if(agua > saldoCuenta){
                alert('Usted no posee saldo suficiente');
            }
            else {
                saldoCuenta -= agua;
                alert('El servicio de Agua ha sido abonado correctamente');
            }
                break;
        case '2':
            if(telefono > saldoCuenta){
                alert('Usted no posee saldo suficiente');
            }
            else {
                saldoCuenta -= telefono;
                alert('El servicio de Telefono ha sido abonado correctamente');
            }
                break;
        case '3':
            if(luz > saldoCuenta){
                alert('Usted no posee saldo suficiente');
            }
            else {
                saldoCuenta -= luz;
                alert('El servicio de Luz ha sido abonado correctamente');
            }
                break;
        case '4':
            if(internet > saldoCuenta){
                alert('Usted no posee saldo suficiente');
            }
            else {
                saldoCuenta -= internet;
                alert('El servicio de Internet ha sido abonado correctamente');
            }
                break;
                default:
            alert('Servicio a pagar no disponible');
    }
            actualizarSaldoEnPantalla();
}

function transferirDinero() {
    const cuentaPropia1 = 123456;
    const cuentaPropia2 = 456789;
    let pregunta = prompt('Ingrese la cuenta a la que desea tranferir');
        if (parseInt(pregunta) === cuentaPropia1 || parseInt(pregunta) === cuentaPropia2){
            saldoATransferir = prompt('Ingrese saldo a transferir')
                transferenciaMayorASaldo();
        }
        else if(parseInt(pregunta) !== cuentaPropia1 ||parseInt(pregunta) !== cuentaPropia2){
                    alert('Solo puede transferirse dinero a una cuenta amiga.');
        }
}

function transferenciaMayorASaldo(){
        if(saldoATransferir > saldoCuenta){
        alert('Su saldo no es suficiente para realizar esta operacion');
        }else {
        saldoCuenta = saldoCuenta - saldoATransferir;
        alert('La transferencia se realizo con exito');
                actualizarSaldoEnPantalla();
    }
}

function iniciarSesion(){
    const codigoSeguridad = 2020;
    let pregunta = prompt('Bienvenido Ezequiel'+'\n'+'Ingrese su codigo de seguridad');
        if(pregunta != codigoSeguridad){
        alert('Codigo incorrecto '+'\n'+'Su dinero ha sido retenido' );
        saldoCuenta = 0;
            actualizarSaldoEnPantalla();
        }else {
        (pregunta === codigoSeguridad)
            alert('Bienvenido a su homebanking');
    }
}

function depositoCheques(){
    let cantidadDeCheques = prompt('Ingrese la cantidad de cheques a depositar')
    let sumaTotalDeCheques = prompt('ingrese el saldo de la suma de los valores a depositar');
    if (cantidadDeCheques += sumaTotalDeCheques){
        alert('Su saldo se actualizara en 48hs');
    }
}

// funciones que actualizan HTML

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


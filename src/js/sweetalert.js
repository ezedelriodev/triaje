import { ejecutaError, continuarPausa, iniciarTriaje } from "..";
import { codigos } from "./componentes";

export const errortiempo = '<p class= "grande"> SE AGOTÓ EL TIEMPO</p>';
export const pausartiempo = '<p class= "grande"> Triaje Pausado</p>';

export const respiraAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert">Si la víctima <u>no</u> camina, la primera valoración es saber si respira.</p> <br>'+
                    '<p class="textAlertCenterBold">¿Respira?</p>';

export const verdeAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert">En el triaje START, si la víctma camina se tría directamente como verde.</p> <br>'+
                    '<p class="textAlertCenterBold">VERDE</p>';

export const abrirViaAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlertCenter" >Si la víctima no respira, debe de abrir la vía aérea.</p> <br>'+
                    '<p class="textAlertCenterBold">Abro Vía Aerea</p>';

export const pulsoAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima tiene una respiración normal. Debe valorar el pulso radial o el relleno capilar.</p> <br>'+
                    '<p class="textAlertCenterBold"> ¿Pulso Radial / Relleno Capilar &lt 2?" </p>';

export const torniqueteAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima presenta taquipnea y una hemorragia activa en extremidad. Debe colocar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const compresionAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima presenta taquipnea y una hemorragia activa en zona de unión. Debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa </p>';

export const rojo1Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Una FR superior a 30, por si sola, es indicativa de triaje rojo. No es necesario hacer más valoraciones. '+
                    'Se aplicarán las medidas salvadoras oportunas solo si fuese necesario y se tria como rojo.</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const negroAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si la víctima no respira después de haber abierto la vía aérea, debe triarse como negro.</p> <br>'+
                    '<p class="textAlertCenterBold"> NEGRO </p>';

export const torniquete2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si ha abierto vía aérea y existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const compresion2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Después de revisar respiración y pulso, si existe una hemorragia activa en zona de unión, debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa </p>';

export const posicionAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si ha abierto la vía aérea de la víctima para que pueda respirar, debe dejarla en posición lateral de seguridad.</p> <br>'+
                    '<p class="textAlertCenterBold"> Posición Lateral de Seguridad</p>';

export const ordenesAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" > Si la víctima presenta pulso o relleno capilar normal, debe valorar si responde a órdenes sencillas.</p> <br>'+
                    '<p class="textAlertCenterBold"> Obedece Órdenes</p>';

export const compresion3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" > Si ha abierto vía aérea y existe una hemorragia activa en zona de unión, debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa</p>';

export const torniquete3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No es necesario seguir evaluando. Existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const rojo2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No muestra sangrado activo. No es necesario seguir evaluando. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const rojo3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Ha abierto la vía aérea de la víctima. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const rojo4Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no obedece órdenes. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const amarilloAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si la víctima responde a órdenes debe ser triada como amarillo</p> <br>'+
                    '<p class="textAlertCenterBold"> AMARILLO </p>';

export const rojo5Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const finalMenos80 = '<p class= "grande">Tus aciertos no llegan al 80% </p><br>'+
                    '<p class="textAlert" >Aun no has adquirido el manejo adecuado del Triaje Start</p> <br>'+
                    '<p class="textAlertCenterBold"> ¿Quieres seguir entrenando?</p>';

export const finalMas80 = '<p class= "grande">Tus aciertos han superado el 80% </p><br>'+
                    '<p class="textAlert" >Has adquirido el manejo adecuado del Triaje Start</p> <br>'+
                    '<p class="textAlertCenterBold"> ¿Quieres seguir entrenando?</p>';

const menPass = '<p class="grande" >Introduce código habilitado para usar la aplicación</p> <br>'+
                '<p class="textAlert">Si no dispones de un código habilitado puedes contactar con <a href="mailto:eze.delrio@gmail.com">eze.delrio@gmail.com</a> para poder hacer uso de la aplicación.</p>';

const bienVenido = '<p class="grande" >¡¡Bienvenid@!!</p> <br>'+
                '<p class="textAlert">Pulsa el botón <span class="grande2"> Iniciar Triaje </span>  cuando quieras comenzar el ejercicio.</p>';

const noHabilitado =  '<p class="textAlertCenter" >Este código no está habilitado</p>';                



export const alerta = (mensaje) => Swal.fire({
    icon: 'error',
    background: '#D6D9C8',
    html: mensaje,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    customClass:{
        closeButton: '.btn',
    },
    willClose: ejecutaError
});


export const alertaTiempo = (mensaje) => Swal.fire({
    icon: 'error',
    background: '#D6D9C8',
    html: mensaje,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    timer: 2000,
    showConfirmButton: false,
    willClose: ejecutaError
});


export const pausarTiempo = (mensaje) => Swal.fire({
    background: '#D6D9C8',
    html: mensaje,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    willClose: continuarPausa
});


export const menos80 = (mensaje) => Swal.fire({
    background: '#D6D9C8',
    html: mensaje,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    showCancelButton: true,
    confirmButtonText:'¡ ¡ ¡ Venga ! ! !',
    cancelButtonText:'Mejor más tarde'
  }).then((result) => {
    (result.isConfirmed) && iniciarTriaje();
  });

export const getPassword = () =>{(async () => {

    const { value: password } = await Swal.fire({
        html: menPass,
        input: 'text',
        width: '40%',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        backdrop: true,  
        inputPlaceholder: 'Introduce tu código',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })
        if (password) {
            if (  codigos.includes(password) ){
                Swal.fire({
                    html: bienVenido
                }); 
            }else{
                Swal.fire({
                    title: `${password}`,
                    html: noHabilitado ,
                    width:'30%',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: true,
                    backdrop: true,
                    willClose: getPassword
                });
            }    
        }else{
            getPassword();
        }
    
    })()}

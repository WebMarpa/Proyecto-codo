// FORMATO DE FECHA
let fechavalor = document.getElementById('fecha')
let meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
let f = new Date();
let fecha= diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
 console.log(fecha)
fechavalor.textContent = `${fecha}`


window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad')
    let humedad = document.getElementById('humedad')


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            //ubicación actual    
           const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=ac1f5b007c7d22b5d1a2706e3f16f332`

           //ubicación por ciudad
           //const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=${AQUI_VIENE_TU_API_KEY}`

           //console.log(url)

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                //console.log(data)
                
                let temp = Math.round(data.main.temp)
                // console.log(temp)
                temperaturaValor.textContent = `Temp: ${temp} ° C`

                //console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = `Ubicación: ${data.name}`                
                // vientoVelocidad.textContent = `Veloc. del Viento: ${data.wind.speed} m/s`
                humedad.textContent =`Humedad: ${data.main.humidity} %`
                
                //para iconos estáticos
                //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                //icono.src = urlIcon
                //console.log(data.weather[0].icon)

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }

            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})
let dolarOficial = document.getElementById('dolar-oficial')  
let dolarOficialVenta = document.getElementById('dolar-oficial-venta') 
let dolarBlue = document.getElementById('dolar-blue')  
let dolarBlueVenta = document.getElementById('dolar-blue-venta')

fetch("https://dolarapi.com/v1/dolares")
    .then((data) => {
    return data.json();
    }).then((completedata) => {
    //   console.log(completedata[1].compra); 
    let oficialCompra= completedata[0].compra
    let oficialVenta= completedata[0].venta
    let blueCompra= completedata[1].compra
    let blueVenta= completedata[1].venta

    dolarOficial.textContent =`Compra ${oficialCompra}`
    dolarOficialVenta.textContent =`Venta ${oficialVenta}`   
    dolarBlue.textContent =`Compra ${blueCompra}`
    dolarBlueVenta.textContent =`Venta ${blueVenta}`

  })

//  VALIDACION FORMULARIO

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.nombre && campos.correo && campos.telefono && terminos.checked ){
// 		formulario.reset();
      

	// 	document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
	// 	setTimeout(() => {
	// 		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	// 	},5000);

	// 	document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
	// 		icono.classList.remove('formulario__grupo-correcto');
	// 	});
	// } else {
	 //	document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	// }
//}});

window.onbeforeunload = () => {
    for(const formulario of document.getElementById('formulario')) {
      form.reset();
    }
  }

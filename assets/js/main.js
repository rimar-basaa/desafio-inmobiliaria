const propiedades = [
    {
      nombre: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "imgNum01",
      rooms: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "imgNum02",
      rooms: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "imgNum03",
      rooms: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "imgNum04",
      rooms: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      description: "Desde las alturas siempre todo se ve mejor",
      src: "imgNum05",
      rooms: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "imgNum06",
      rooms: 5,
      metros: 500
    }
];

filtrar(); //carga inicial

// -------- restringe ingreso a solo numeros
const habit = document.querySelector("#habit");
habit.addEventListener("keydown",validaNumero);
const desde = document.querySelector("#desde");
desde.addEventListener("keydown",validaNumero);
const hasta = document.querySelector("#hasta");
hasta.addEventListener("keydown",validaNumero);

function validaNumero(evento) {    
    if (!(evento.key >= 0 && evento.key <= 9 || evento.key == "Backspace")) {        
        evento.returnValue = false;
    }    
}

// -------------------- valida campos completos
const btn = document.querySelector("#btn");
btn.addEventListener("click",validaBuscar);

function validaBuscar(){
    let datHabit = Number(habit.value);
    let datDesde = Number(desde.value);
    let datHasta = Number(hasta.value);    

    if (datHabit * datDesde * datHasta == 0 ) {        
        alert("Faltan campos por completar");                               
    } else {  
        if (datDesde <= datHasta) {
            filtrar(habit.value, desde.value, hasta.value);        
        } else {        
            alert("Valor Desde, debe ser menor o igual al valor de Hasta");
        }
    }                
}

// ------------------------ filtrado
function filtrar(phabit = 1, pdesde = 1, phasta = 1000) {    
    let counter = 0;
    let templateHtml = "";    
    for (let propiedad of propiedades) {
        if (propiedad.rooms >= phabit && propiedad.metros >= pdesde && propiedad.metros <= phasta) {            
            counter ++;
            templateHtml += `
            <div class="card">
                <div class="img ${propiedad.src}"></div>
                <div class="mainInfo">
                    <h4 class="title">${propiedad.nombre}</h4>
                    <p class="pinfo">${propiedad.rooms} Habitaciones</p>
                    <p class="pinfo">${propiedad.metros} Metros cuadrados</p>
                    <p class="pinfo">${propiedad.description}</p>
                    <button class="btn2 btn">Ver mas</button>
                </div>
            </div>`;
        }
    }
    const container = document.querySelector("#containerCard");
    container.innerHTML = templateHtml;
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `Total: ${counter}`;
}  
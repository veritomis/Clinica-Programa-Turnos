//Arrays con datos de algunos doctores, simulando ser una base de datos.
let perfilDoctores =[
    {
        id: 0,
        prefijo: "Dra.",
        nombre: "María Paz",
        apellido: "Martinez",
        documento: "24325689",
        especialidad: "Endocrinología",
        fechaNacimiento: "1985-02-14", //aaaa-mm-dd
        mail: "martinezmariapaz@gmail.com",
        //Dias y horas que atiende
        diasYHoras: [
            {
                dia: "Martes",
                horas: ["09:00","09:30","10:00","10:30","11:00","11:30"]
            },
            {
                dia: "Jueves",
                horas: ["09:00","09:30","10:00","10:30","11:00","11:30"]
            }
        ],
        agenda: `<div class="dia-columna">
          <h3>Martes 13</h3>
          <div class="turno ocupado">09:00 - Maidan Sabrina</div>
          <div class="turno ocupado">09:30 - Duarte Andrea</div>
          <div class="turno ocupado">10:00 - Capuccino Federico</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">10:30 - Disponible</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">11:00 - Disponible</div>
          <div class="turno ocupado">11:30 - Lavandeira Ezequiel</div>
        </div>
    
        <div class="dia-columna">
          <h3>Jueves 15</h3>
          <div class="turno ocupado">09:00 - Di Maio Yanina</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">09:30 - Disponible</div>
          <div class="turno ocupado">10:00 - Veiga Victoria</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">10:30 - Disponible</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">11:00 - Disponible</div>
          <div class="turno ocupado">11:30 - Ferreira Agustin</div>
        </div>`
    },
    {
        id: 1,
        prefijo: "Dr.",
        nombre: "Gregorio",
        apellido: "Fiks",
        documento: "12587469",
        especialidad: "Traumatología",
        fechaNacimiento: "1956-05-14",
        mail: "fiksgregorio@gmail.com",
        diasYHoras: [
            {
                dia: "Lunes",
                horas: ["15:00","15:30","16:00","16:30","17:00","17:30"]
            },
            {
                dia: "Jueves",
                horas: ["09:00","09:30","10:00","10:30","11:00","11:30"]
            }
        ],
        agenda: `<div class="dia-columna">
          <h3>Lunes 11</h3>
          <div class="turno ocupado">15:00 - Fabio Casal</div>
          <div class="turno ocupado">15:30 - Anton Meseguer</div>
          <div class="turno ocupado">16:00 - Saray Real</div>
          <div class="turno ocupado">16:30 - Maria Gracia Ramiro</div>
          <div class="turno ocupado">17:00 - Cipriano Beltran</div>
          <div class="turno ocupado">17:30 - Maria Purificacion Palma</div>
        </div>
    
        <div class="dia-columna">
          <h3>Jueves 15</h3>
          <div class="turno ocupado">09:00 - Maria Blanca Jara</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">09:30 - Disponible</div>
          <div class="turno ocupado">10:00 - Alessandro Jaen</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">10:30 - Disponible</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">11:00 - Disponible</div>
          <div class="turno ocupado">11:30 - Ildefonso Cervantes</div>
        </div>`
    },
    {
        id: 2,
        prefijo: "Dra.",
        nombre: "Miriam",
        apellido: "Barzana",
        documento: "18457963",
        especialidad: "Ginecología",
        fechaNacimiento: "1982-02-22",
        mail: "miriambarzana@gmail.com",
        diasYHoras: [
            {
                dia: "Vienres",
                horas: ["15:00","15:20","15:40","16:00","16:20","16:40"]
            }
        ],
        agenda: `<div class="dia-columna">
          <h3>Viernes 15</h3>
          <div class="turno ocupado">15:00 - Maidan Sabrina</div>
          <div class="turno ocupado">15:20 - Duarte Andrea</div>
          <div class="turno ocupado">15:40 - Capuccino Federico</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">16:00 - Disponible</div>
          <div class="turno disponible" onclick="seleccionarTurno(this)">16:20 - Disponible</div>
          <div class="turno ocupado">16:40 - Lavandeira Ezequiel</div>
        </div>`
    }
];

console.log(perfilDoctores[0].id)

//Array con datos de pacientes, simulando ser una base de datos. ACTUALEMENTE SIN USO PORQUE NO SE COMO INTEGRARLO
/*let pacientes= [
    {
        id: 0,
        nombre: "Marcos Ezequiel",
        apellido: "Toledo",
        documento: "39932431",
        telefono: "11 33190247",
        fechaNacimiento: "1996-12-13",
        cobertura: "Particular"
    },
    {
        id: 1,
        nombre: "Veronica Alejandra",
        apellido: "Mizel",
        documento: "32475896",
        telefono: "11 15486835",
        fechaNacimiento: "1989-02-01",
        cobertura: "Textiles"
    },
    {
        id: 2,
        nombre: "Marcos Joel",
        apellido: "Buono",
        documento: "42578695",
        telefono: "11 85479334",
        fechaNacimiento: "2001-06-15",
        cobertura: "Del plastico"
    },
    {
        id: 3,
        nombre: "Yamila Alejandra",
        apellido: "Garcia",
        documento: "41257896",
        telefono: "11 54785632",
        fechaNacimiento: "1999-09-14",
        cobertura: "Osecac"
    },
]*/

//Array de turnos, Simulando ser una base de datos. Solo se creara una cantidad de días en especifico. ACTUALMENTE SIN USO PORQUE NO SE COMO IMPLEMENTAR
/*let turnosAgenda = [
    {
        idDoctor: perfilDoctores[0].id,
        dia: perfilDoctores[0].diasYHoras[0].dia,
        fecha: "2025-07-13",
        hora: perfilDoctores[0].diasYHoras[0].hora[0],
        paciente: pacientes[0].id
    }
]
*/


// DOM QUE MUESTRA LA AGENDA DEL DOCTOR SELECCIONADO, mediante un select
//esta parte del addEvent esta hecha por IA, no se como funciona. Le dije que necesitaba recolectar el valor de la opcion seleccionada en doctor
document.addEventListener("DOMContentLoaded", () => {
    let selectDoctor = document.querySelector("#doctor");

    // Escucha el cambio en el select
    selectDoctor.addEventListener("change", () => {
        let valorSeleccionado = selectDoctor.value;  // Valor seleccionado
        console.log("El valor seleccionado es: " + valorSeleccionado);

        let AgendaDOM = "";
        // Recorre el array de perfilDoctores
        for (let i = 0; i < perfilDoctores.length; i++) {
            if (perfilDoctores[i].id == valorSeleccionado) {
                // Creamos el contenido de AgendaDOM solo si hay una coincidencia
                AgendaDOM = `
                    <div class="grid-container">
                        <h1 class="titulo">Agenda Turnos Médicos</h1>
                        <h3 class="subtitulo">Elija fecha y hora</h3>
                    </div>
                    <div id="calendar"></div>

                    <div class="info-profesional">
                        <div>
                            <h2>${perfilDoctores[i].prefijo} ${perfilDoctores[i].apellido} ${perfilDoctores[i].nombre}</h2>
                            <p>${perfilDoctores[i].especialidad}</p>
                        </div>
                    </div>
                    <div class="navegacion-fechas">
                        <button onclick="semanaAnterior()">←</button>
                        <button onclick="mostrarSemanaActual()">Hoy</button>
                        <button onclick="semanaSiguiente()">→</button>
                        <input type="date" onchange="irADiaSeleccionado(this.value)">
                    </div>
                    ${perfilDoctores[i].agenda}
                `;
                break; // Para detener el ciclo cuando ya se encuentra al doctor
            }
        }
        document.querySelector("#agenda").innerHTML = AgendaDOM;
    });
});


/*document.addEventListener("DOMContentLoaded",() => { 
    let selectDoctor = document.querySelector("#doctor");

    selectDoctor.addEventListener("change", () =>{ //Escucha el cambio en el select
        let valorSeleccionado = selectDoctor.value; //Este es el valor seleccionado, y lo registra en una variable
        console.log("El valor seleccionado es: "+valorSeleccionado)

        let AgendaDOM="";

        for (let i=0; i<perfilDoctores.length; i++) { //recorre todo el arrray de doctores
            if (perfilDoctores[i].id==valorSeleccionado){ 
        AgendaDOM=`    <div class="grid-container">
        <h1 class="titulo">Agenda Turnos Médicos</h1>
        <h3 class="subtitulo">Elija fecha y hora</h3>
    </div>
    <div id="calendar"></div>

        <div class="info-profesional">
          <img src="./img/Perfil en blanco.webp" alt="Doctora" class="avatar" width="80">
          <div>
            <h2>${perfilDoctores[i].prefijo} ${perfilDoctores[i].apellido} ${perfilDoctores[i].nombre}</h2>
            <p>${perfilDoctores[i].especialidad}</p>
          </div>
        </div>
        <div class="navegacion-fechas">
          <button onclick="semanaAnterior()">←</button>
          <button onclick="mostrarSemanaActual()">Hoy</button>
          <button onclick="semanaSiguiente()">→</button>
          <input type="date" onchange="irADiaSeleccionado(this.value)">
        </div>
        ${perfilDoctores[i].agenda}
         </main>`
    }
        }

document.querySelector(".agenda").innerHTML=agendaDOM

    })
})
*/


/* de una lista seleccionable selecciona el apellido de un doctor, que esta relacionada a un ID...

for {let i=0; i<perfilDoctores.length; i++}{

}
if (de un seleccionable, selecciona el apellido, que contiene un id)





*/
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// switch Btn - Animacion
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Btn_Swich {

    constructor() {
        this.seleccion_de_informacion = this.seleccion_de_informacion.bind(this);
        this.btnActive = null;
        this.addEventClick();
    }

    addEventClick(){
        document.querySelectorAll("#swichtBtn div")
        .forEach(item => {
            item.addEventListener("click", this.seleccion_de_informacion)
        });
    }

    seleccion_de_informacion(ev){
        this.removeIndicador();
        this.btnActive = ev.currentTarget;
        this.btnActive.classList.add("active");
    }

    removeIndicador(){
        document.querySelectorAll("#swichtBtn div.active")
			.forEach(item => item.classList.remove("active"));
    }
}

(function(){
	new Btn_Swich();
})();


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Evento 1
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("evento_one").addEventListener("click", EventoOne, false);
var exiten_datos = false;
function EventoOne (){
    document.getElementById("contenedor-informacion").style.opacity = 1;

    if (exiten_datos) {document.querySelector("#tabla-datos tbody").innerHTML = ""};

    for (var i = 0; i < 5; i++) {
        let tabla_datos = document.getElementById("tabla-datos").getElementsByTagName('tbody')[0];
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        let bets = document.createElement("td");
        let address = document.createElement("td");
        let url = document.createElement("td");
        let check = document.createElement("td");

        id.innerHTML = i+1;
        address.innerHTML = "0xF0B9cCD5f476093e1D342C3232a85CA53e1a82ae";
        bets.innerHTML = i+5;
        url.innerHTML = "<input type='text' name='' value=''>"
        check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

        tr.appendChild(id);
        tr.appendChild(address);
        tr.appendChild(bets);
        tr.appendChild(url);
        tr.appendChild(check);

        tabla_datos.appendChild(tr);
    }
    exiten_datos = true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Evento 2
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("evento_two").addEventListener("click", EventoTwo, false);
function EventoTwo (){
    document.getElementById("contenedor-informacion").style.opacity = 1;

    if (exiten_datos) {document.querySelector("#tabla-datos tbody").innerHTML = ""};

    for (var i = 0; i < 5; i++) {
        let tabla_datos = document.getElementById("tabla-datos").getElementsByTagName('tbody')[0];
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        let bets = document.createElement("td");
        let address = document.createElement("td");
        let url = document.createElement("td");
        let check = document.createElement("td");

        id.innerHTML = i+1;
        address.innerHTML = "0xF0B9cCD5f476093e1D342C3232a85CA53e1a82ae";
        bets.innerHTML = i+5;
        url.innerHTML = "<a href=''><button class='btn waves-effect waves-light' type='submit' name='action'>Go<i class='material-icons right'>http</i></button></a>"
        check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

        tr.appendChild(id);
        tr.appendChild(address);
        tr.appendChild(bets);
        tr.appendChild(url);
        tr.appendChild(check);

        tabla_datos.appendChild(tr);
    }
    exiten_datos = true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Datos
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("btn-enviar").addEventListener("click", checkDatos, false);
function checkDatos (){
    let checkboxes = document.querySelector("#tabla-datos tbody").getElementsByTagName('input');
    let contador = 1;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox') {
            if(checkboxes[i].checked === true){
                 console.log(i-contador);
             };
            contador ++;
        }
    }
}

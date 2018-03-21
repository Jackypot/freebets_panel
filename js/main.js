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
// Funcion de post - Recibir datos
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function recibirDatos (NumOperativo){

    var DatosR = new Promise(function (resolve, reject) {

        let url = "http://192.168.1.75:8080/freebets";
        return fetch(url, {method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ "operativo": parseInt(NumOperativo) }) })
        .then(function(response){if (!response.ok) {throw Error(response.statusText);} resolve(response.json());})
        .catch(function(error) { console.error('Parece que hubo un error: ' + error); });

        reject(new Error('Parece que tuvimos un error'))

    });

    return DatosR;
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Calcular tiros gratis
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function calcularTiros (valor){
    let valor_a_calcular = parseInt(valor) / 1000000000000000000;
    let tiros_gratis = valor_a_calcular / 0.01;

    return tiros_gratis;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Evento 1
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("evento_one").addEventListener("click", EventoOne, false);
var exiten_datos = false;
function EventoOne (){
    document.getElementById("contenedor-informacion").style.opacity = 1;

    if (exiten_datos) {document.querySelector("#tabla-datos tbody").innerHTML = ""};
    exiten_datos = true;

    recibirDatos(1).then(function(data){

        for (var item in data) {
            let tabla_datos = document.getElementById("tabla-datos").getElementsByTagName('tbody')[0];
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let bets = document.createElement("td");
            let address = document.createElement("td");
            let url = document.createElement("td");
            let check = document.createElement("td");

            id.innerHTML = data[item].id;
            address.innerHTML = data[item].address;

            let tiros_correspondientes = calcularTiros(data[item].Valor);

            bets.innerHTML = tiros_correspondientes;
            url.innerHTML = "<input type='text' name='' value=''>"
            check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

            tr.appendChild(id);
            tr.appendChild(address);
            tr.appendChild(bets);
            tr.appendChild(url);
            tr.appendChild(check);

            tr.id = "data-"+item.toString();

            tabla_datos.appendChild(tr);
        }

    });


}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Evento 2
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("evento_two").addEventListener("click", EventoTwo, false);
function EventoTwo (){
    document.getElementById("contenedor-informacion").style.opacity = 1;

    if (exiten_datos) {document.querySelector("#tabla-datos tbody").innerHTML = ""};

    recibirDatos(2).then(function(data){

        for (var item in data) {

            let tabla_datos = document.getElementById("tabla-datos").getElementsByTagName('tbody')[0];
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let bets = document.createElement("td");
            let address = document.createElement("td");
            let url = document.createElement("td");
            let check = document.createElement("td");

            id.innerHTML = data[item].id;
            address.innerHTML = data[item].address;
            bets.innerHTML = data[item].tirosGratis
            url.innerHTML = "<a href='"+data[item].detalles+"' target='_blank'><button class='btn waves-effect waves-light' type='submit' name='action'>Go<i class='material-icons right'>http</i></button></a>"
            check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

            tr.appendChild(id);
            tr.appendChild(address);
            tr.appendChild(bets);
            tr.appendChild(url);
            tr.appendChild(check);

            tabla_datos.appendChild(tr);
        }
    });
    exiten_datos = true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Datos - Evento One
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("btn-enviar").addEventListener("click", checkDatos, false);
function checkDatos (){
    let checkboxes = document.querySelector("#tabla-datos tbody").getElementsByTagName('input');
    let contador = 1;
    let array = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox') {
            if(checkboxes[i].checked === true){

                 let dato_guardar = document.getElementById("data-"+(i-contador).toString());
                 let aux = {"id": dato_guardar.childNodes[0].innerText, "folio": "bitcointalkPromo", "numTiros": dato_guardar.childNodes[2].innerText, "url": dato_guardar.childNodes[3].childNodes[0].value};
                 array.push(aux);

             };
            contador ++;
        }
    }
}

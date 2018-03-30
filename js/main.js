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
// Calcular tiros gratis
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function calcularTiros (valor){
    let valor_a_calcular = parseInt(valor) / 1000000000000000000;
    let tiros_gratis = valor_a_calcular / 0.01;

    return [tiros_gratis, valor_a_calcular];
}

var OperativoUnoActivo = false;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Funcion de post - Recibir datos Operativo 1
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function recibirDatosOP1(){
    var DatosR = new Promise(function (resolve, reject) {
        let url = "https://jackynet.eu-4.evennode.com/freebets/OP1";

        return fetch(url, {method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ }) })
        .then(function(response){
            if (!response.ok) {throw Error(response.statusText);}
            resolve(response.json());})
        .catch(function(error) { console.error('Parece que hubo un error: ' + error); });

        reject(new Error('Parece que tuvimos un error'))

    });

    return DatosR;
}
// Operativo 1 - Eventos
//Funcion de evento CLICK a la navegacion de Operativo 1
document.getElementById("operativo_1").addEventListener("click", mostrar_datos_Operativo1, false);
document.getElementById("operativo_1_m").addEventListener("click", mostrar_datos_Operativo1, false);

// Funcion de Operativo 1
function mostrar_datos_Operativo1 (){

    document.querySelector(".contenedor_tabla_operativo_1").style.display = "block";
    document.querySelector(".contenedor_tabla_operativo_2").style.display = "none";

    let tabla_operativo1 = document.querySelector(".contenedor_tabla_operativo_1 tbody");

    if(tabla_operativo1.childNodes.length > 1) tabla_operativo1.innerHTML = "";
 
    recibirDatosOP1().then(function(data){
       
        for (var item in data) {
            
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let bets = document.createElement("td");
            let address = document.createElement("td");
            let url = document.createElement("td");
            let check = document.createElement("td");
            let apuesta = document.createElement("td");

            id.innerHTML = data[item].id;
            address.innerHTML = data[item].address;
            let aux = calcularTiros(parseInt(data[item].Valor));
            apuesta.innerHTML = aux[1];
            bets.innerHTML = aux[0];
            url.innerHTML = "<input type='text' name='' value=''>"
            check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"


            tr.appendChild(id);
            tr.appendChild(address);
            tr.appendChild(apuesta);
            tr.appendChild(bets);
            tr.appendChild(url);
            tr.appendChild(check);

            tr.id = "data-"+item.toString();

            tabla_operativo1.appendChild(tr);
        }

    });


}
//Verificacion de datos antes de enviar
document.getElementById("btnEnvioOp1").addEventListener("click", checkDatosOP1, false);
function checkDatosOP1 (){
    M.Toast.dismissAll();
        let checkboxes = document.querySelector("#tabla_operativo_1 tbody").getElementsByTagName('input');
        let contador = 1;
        let array = [];

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === 'checkbox') {
                if(checkboxes[i].checked === true){

                    function addZero(i) {
                        if (i < 10) { i = "0" + i; }
                        return i;
                    }

                    let d = new Date();
                    let fecha = d.getUTCFullYear().toString()+("0" + (d.getUTCMonth() + 1)).slice(-2).toString()+d.getUTCDate().toString();
                    let horas = d.getUTCHours().toString()+d.getUTCMinutes().toString()+addZero(d.getUTCSeconds()).toString();

                    let dato_guardar = document.getElementById("data-"+(i-contador).toString());
                    let aux = {"id": dato_guardar.childNodes[0].innerText, "folio": "bitcointalkPromo", "numTiros": dato_guardar.childNodes[3].innerText, "url": dato_guardar.childNodes[4].childNodes[0].value, "fecha": fecha, "hora": hora};
                    array.push(aux);

                };
                contador ++;
            }
        }

        if (array.length > 0) {
            console.log(array);
            
            enviar_datos_eventoOne(array);
        }else { M.toast({html: 'No se estan enviando datos, porfavor seleccione datos a enviar', classes: 'rounded'}); }
}
//Envio de datos
function enviar_datos_eventoOne(json){
    let url = "https://jackynet.eu-4.evennode.com/freebets/OP1";
    return fetch(url, {method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({"data":json })})
    .then(function(response){
        if (!response.ok) {throw Error(response.statusText);}
        M.toast({html: 'Datos enviados con exito', classes: 'rounded'});
        mostrar_datos_Operativo1();
    })
    .catch(function(error) { console.error('Parece que hubo un error: ' + error); });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Funcion de post - Recibir datos Operativo 2
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.getElementById("operativo_2").addEventListener("click", accion_Switches, false);
document.getElementById("operativo_2_m").addEventListener("click", accion_Switches, false);

function recibirDatosOP2(){
    var DatosR = new Promise(function (resolve, reject) {
        let url = "https://jackynet.eu-4.evennode.com/freebets/OP2";

        return fetch(url, {method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ }) })
        .then(function(response){
            if (!response.ok) {throw Error(response.statusText);}
            resolve(response.json());})
        .catch(function(error) { console.error('Parece que hubo un error: ' + error); });

        reject(new Error('Parece que tuvimos un error'))

    });

    return DatosR;
}

// Asignar al Swicht las acciones correspondientes
function accion_Switches (){
    document.querySelector(".contenedor_tabla_operativo_1").style.display = "none";
    document.querySelector(".contenedor_tabla_operativo_2").style.display = "block";

    document.getElementById("btn_bitcoin_talks").addEventListener("click", mostrar_datos_bitcoin_talks, false);
    document.getElementById("btn_demo").addEventListener("click", mostrar_datos_demo, false);
}

// Mostrar los datos de Bitcoin Talks
function mostrar_datos_bitcoin_talks() {
    let cont_tabla2 = document.querySelector(".cont-tabla2");
    cont_tabla2.style.display = "block";

    let tabla_operativo2 = document.getElementById("tabla_operativo_2");
    tabla_operativo2.childNodes[1].childNodes[1].childNodes[7].removeAttribute("style");
    
    let tbody = document.querySelector(".contenedor_tabla_operativo_2 tbody");

    if(tbody.childNodes.length > 1) tbody.innerHTML = "";

    recibirDatosOP2().then(function(data){
        console.log(data.promobitcoin2);

        for (var item in data.promobitcoin2) {

            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let bets = document.createElement("td");
            let address = document.createElement("td");
            let url = document.createElement("td");
            let check = document.createElement("td");
    
            id.innerHTML = data.promobitcoin2[item].id;
            address.innerHTML = data.promobitcoin2[item].address;
            bets.innerHTML = parseInt(data.promobitcoin2[item].tirosGratis);
            url.innerHTML = "<a href='"+data.promobitcoin2[item].detalle+"' target='_blank'><button class='btn waves-effect waves-light' type='submit' name='action'>Go<i class='material-icons right'>http</i></button></a>";
            check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"
    
            tr.appendChild(id);
            tr.appendChild(address);
            tr.appendChild(bets);
            tr.appendChild(url);
            tr.appendChild(check);
    
            tbody.appendChild(tr);
        }
    });

    // for (var i = 0; i < 10; i ++) {
        
    //     let tr = document.createElement("tr");
    //     let id = document.createElement("td");
    //     let bets = document.createElement("td");
    //     let address = document.createElement("td");
    //     let url = document.createElement("td");
    //     let check = document.createElement("td");

    //     id.innerHTML = i + 1;
    //     address.innerHTML = "0xc4d2C44aAc80C9Acbf604D78666C7E844F1870E1";
    //     bets.innerHTML = "1";

    //     url.innerHTML = "<a href='#' target='_blank'><button class='btn waves-effect waves-light' type='submit' name='action'>Go<i class='material-icons right'>http</i></button></a>";
    //     check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

    //     tr.appendChild(id);
    //     tr.appendChild(address);
    //     tr.appendChild(bets);
    //     tr.appendChild(url);
    //     tr.appendChild(check);

    //     tbody.appendChild(tr);
    // }
}

// Mostrar los datos de Jackypot Demo
function mostrar_datos_demo(){
    let cont_tabla2 = document.querySelector(".cont-tabla2");
    cont_tabla2.style.display = "block";

    let tabla_operativo2 = document.getElementById("tabla_operativo_2");
    tabla_operativo2.childNodes[1].childNodes[1].childNodes[7].style.display = "none";
    
    let tbody = document.querySelector(".contenedor_tabla_operativo_2 tbody");

    if(tbody.childNodes.length > 1) tbody.innerHTML = "";

    recibirDatosOP2().then(function(data){
            
        for(var item in data.promoTiroGratis){
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let bets = document.createElement("td");
            let addres = document.createElement("td");
            let check = document.createElement("td");

            id.innerHTML = data.promoTiroGratis[item].id;
            addres.innerHTML = data.promoTiroGratis[item].address;
            bets.innerHTML = data.promoTiroGratis[item].tirosGratis === null ? 0 : parseInt(data.promoTiroGratis[item].tirosGratis);
            check.innerHTML = "<p><label><input type='checkbox'/><span></span></label></p>"

            tr.appendChild(id);
            tr.appendChild(addres);
            tr.appendChild(bets);
            tr.appendChild(check);

            tbody.appendChild(tr);
        }
    });
}
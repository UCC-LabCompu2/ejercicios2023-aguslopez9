/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

function convertirUnidades(id, valor){
    let met, pul, pie, yar;

    if (valor.includes(",")){
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }
    else if (id==="metro"){
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    }
    else if (id==="pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id==="pie") {
        pie = valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id==="yarda") {
        yar = valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value = Number(yar).toFixed(2);
}

/**
 * Convierte grados a radianes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */

convertirGR = (id) => {
    let gr, rad;
    if (id=="grados"){
        gr = document.getElementById("grados").value;
        if (isNaN(gr)){
            gr = "";
        }
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    }
    else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)){
            rad = "";
        }
        document.getElementById("grados").value = (rad*180)/Math.PI;
    }
}

/**
 * Muestra u oculta un div
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio del html
 */

let mostrar_ocultar = (id) => {
    if (id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * suma dos inputs introducidos por el usuario
 * @method sumar
 */

verLetra = (id,value) => {

}
let sumar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value);
    res =  s1 + s2;
    document.getElementById("totalS").innerHTML = res;
}

/**
 * resta dos inputs introducidos por el usuario
 * @method restar
 */

let restar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.res_num1.value);
    s2 = Number(document.operacionesMat.res_num2.value);
    res =  s1 - s2;
    document.operacionesMat.res_total.value = res;
}

/**
 * multiplica dos inputs introducidos por el usuario
 * @method multiplicar
 */

let multiplicar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.mul_num1.value);
    s2 = Number(document.operacionesMat.mul_num2.value);
    res =  s1 * s2;
    document.operacionesMat.mul_total.value = res;
}

/**
 * divide dos inputs introducidos por el usuario
 * @method dividir
 */

let dividir = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.div_num1.value);
    s2 = Number(document.operacionesMat.div_num2.value);
    res =  s1 / s2;
    document.operacionesMat.div_total.value = res;
}


/**
 *
 * @method generarUrl
 */
let generarUrl = () => {
    const dis = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompleta = `segundaWeb.html#${dis}#${uni}`;
    window.open(urlCompleta);
}

/**
 *
 * @method cargarValor
 */
let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open("w2.html");
}

let cargarLS = () => {
    const dist = localStorage.getItem("distanciaLS");
    const uni = localStorage.getItem("unidadLS");
    console.log(distancia);
    console.log(unidad);
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";
    //dibujar rectangulo
    let margen = 5;
    ctx.fillRect(0+margen, yMax-120-margen, 130, 120);

    //dibujar circulo
    ctx.arc(xMax/2,yMax/2,100,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;

}

var bandera;
let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {bandera = true};
    canvas.onmouseup = function () {bandera = false};

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}
/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

function convertirUnidades(id, valor){
    let met, pul, pie, yar;

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
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
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

let sumar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value);
    res =  s1 + s2;
    document.operacionesMat.sum_total = res;
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
    document.operacionesMat.res_total = res;
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
    document.operacionesMat.mul_total = res;
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
    document.operacionesMat.div_total = res;
}
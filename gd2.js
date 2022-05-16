//Este codigo nos muestra las cordenadas de los puntos
//que se generan con cada iteracion de gradient descent

//Aqui programamos la funcion escalar original, en este
//caso de 2 entradas
function fdxy(x,y) {
    let a = (Math.pow(x,2) + Math.pow(y,2)) / 20;
	let b = Math.cos(x * y) / 10;
  return a + b;
}

//Aqui programamos la componente x de la gradiente
//En este caso al programar las funciones gradiente
//tuvimos que agregar a la funcion un segundo parametro
function grdntx(x,y) {
	return (x - y * Math.sin(x*y))/10;
}

//Aqui programamos la componente y de la gradiente
function grdnty(x,y) {
	return (y - x * Math.sin(x*y))/10;
}

//Aqui se ejecuta el algoritmo como tal, recibe
//la distancia de paso, las veces a iterar y las
//cordenadas del punto inicial
function gd(a,t,x,y) {
	for(let i = 0; i < t; i++) {
  	let resultx = x - (a * grdntx(x,y));
    let resulty = y - (a * grdnty(x,y));
    x = resultx;
    y = resulty;
    console.log();
    console.log("i: " + (i + 1));
    console.log("x: " + x + " y: " + y + " z: " + fdxy(x,y));
    //formato para meter mas rapido a geogebra
    console.log("("+x+","+y+","+fdxy(x,y)+")");
  }
}

gd(2,5,5,-3);


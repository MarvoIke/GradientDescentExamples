//Este codigo nos muestra las cordenadas de los puntos
//que se generan con cada iteracion de gradient descent

//Aqui programamos la funcion escalar original, en este
//caso de 2 entradas
function fdxy(x,y) {
	return (Math.pow((x - 8),2) + Math.pow((y + 3),2))/10;
}

//Aqui programamos la componente x de la gradiente
function grdntx(x) {
	return (x - 8)/5;
}

//Aqui programamos la componente y de la gradiente
function grdnty(y) {
	return (y + 3)/5;
}

//Aqui se ejecuta el algoritmo como tal, recibe
//la distancia de paso, las veces a iterar y las
//cordenadas del punto inicial
function gd(a,t,x,y) {
	for(let i = 0; i < t; i++) {
  	let resultx = x - (a * grdntx(x));
    let resulty = y - (a * grdnty(y));
    x = resultx;
    y = resulty;
    //console.log();
    //console.log("i: " + (i + 1));
    //console.log("x: " + x + " y: " + y + " z: " + fdxy(x,y));
    //formato para meter mas rapido a geogebra
    console.log("("+x+","+y+","+fdxy(x,y)+")");
  }
}

//params: Distancia de paso, Iteraciones, x inicial, y inicial
gd(1,10,10,-8);


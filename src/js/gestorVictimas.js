
export let arrayImagenes = ()=>{

  //Array de imágenes
  let imagenes = [];
  let variantesRojos = [
    "rnslrz",
    "rsunrz",
    "riirzz",
    "rnselr",
    "rnsilr",
    "rrrzzz",
    "rsperz",
    "rspirz",
    "rsprzz",
    "reerzz"
  ];
  let lista = [1,2,3,4,5,6,7,8,9];
  let listaAcum = []; //Array orden de los 9 personajes


  //Número total de víctimas a tratar
  const numVictimas = 45;
  const tiposDeRojos = variantesRojos.length;

  //Porcentajes por color

  const verde = 10;
  const amarillo = 15;
  const negro = 10;
  const rojo = 65;

  //Calculos en función de víctimas y porcentajes
  let totalVerdes = Math.round((verde * numVictimas) / 100);
  let totalAmarillos = Math.round((amarillo * numVictimas) / 100);
  let totalNegros = Math.round((negro * numVictimas) / 100);
  let totalRojos = Math.round((rojo * numVictimas) / 100);

  //Cuadrar resultados con víctimas totales por redondeos. Ajusto con los rojos al ser los numerosos
  let totalcalculado = totalVerdes + totalAmarillos + totalNegros + totalRojos;

  if (totalcalculado != numVictimas) {
    let diferencia = totalcalculado - numVictimas;
    totalRojos = totalRojos - diferencia;
    }

  //CALCULO ARRAY ORDEN DE 9 PERSONAJES
    //Calcula cuantos arrays del 1 al 9 hay que crear para cubrir todas víctimas.
    const cantListas = Math.trunc( numVictimas/9 )+1;

    //Array aleatorio para seleccionar los 9 personajes de forma aleatoria,
    for (let i=1; i<=cantListas; i++){
      lista = lista.sort(function() {return Math.random() - 0.5});
      listaAcum.push(...lista);
    }

    //Quito elementos sobrantes
    const aEliminar = listaAcum.length - numVictimas;
    listaAcum.length = listaAcum.length - aEliminar;

    //Modifico números concurrentes iguales
    for (let i=1; i<=cantListas-1; i++){
      if(listaAcum[i*9] == listaAcum[(i*9)-1]){
        let provisional = listaAcum[i*9];
        listaAcum[i*9] = listaAcum[i*9+1];
        listaAcum[i*9+1] = provisional;
      }
    }

  //CREAR ARRAY DE 13 CASOS

  function crearArray (cantidad, nombre){
    for (let i = 0; i < cantidad; i++) {
      imagenes.push(nombre);
    }
    return imagenes;
  }

  imagenes = crearArray(totalVerdes, "vzzzzz" );
  imagenes = crearArray(totalAmarillos, "asusaz" );
  imagenes = crearArray(totalNegros, "nnnnzz" );

  let p = 0;
  for (let i = 0; i < totalRojos; i++) {
    imagenes.push(variantesRojos[p]);
    p++;
    if (p == tiposDeRojos) {
      p = 0; 
    }
  }

  imagenes = shuffle(imagenes);

  //Desordenar matriz
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //Función para resolver conflicto de bebe sin torniquete
  const getElement = (caso, x, element)=>{
    if(x == 0){
      if(listaAcum[1] != 7){
        element = element+7;
      }else{
        element = element+3;
      }
    }else if( x == listaAcum.length-1){
      if(listaAcum[listaAcum.length-2] != 7){
        element = element+7;
      }else{
        element = element+3;
      }
    }else{
      if(listaAcum[x-1] != 7 && listaAcum[x+1] != 7){
        element = element+7;
      }else if(listaAcum[x-1] == 3 || listaAcum[x+1] == 3){
        element = element+4;
      }else{
        element = element+4;
      }
    }
    return element;
  }


  //Junto array imagenes con lista de personajes
  //Hay ajustes para solucionar tema de imagen bebe sin torniquete
  imagenes = imagenes.map((element, x)=>{
    if(element == "reerzz" && listaAcum[x] == 1){
      element = getElement( "reerzz", x, element)
    }else if(element == "rnselr" && listaAcum[x] == 1){
      element = getElement( "rnselr", x, element)
    }else if(element == "rsperz" && listaAcum[x] == 1){
      element = getElement( "rsperz", x, element) 
    }else{
      element = element+listaAcum[x]
    }
    return element;
  
  });
  return imagenes;
}







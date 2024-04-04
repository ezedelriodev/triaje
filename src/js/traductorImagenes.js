
export let traducirImagen = (imagen)=>{

    switch (imagen.slice(0, -1)){

        case 'asusaz':
        case 'rnslrz':
        case 'rrrzzz':
        case 'rsprzz':
        case 'rsunrz':
          imagen='tumbado'+imagen[6];
          break;
      
        //Hacemos que los negros sean o torniquete o compresión
        case 'nnnnzz':
          imagen = (imagen[6]%2==0) ? 'torniquete'+imagen[6] : 'compresion'+imagen[6];
          break;
      
        case 'vzzzzz':
          imagen='caminando'+imagen[6];
          break;
          
        case 'reerzz':
        case 'rnselr':
        case 'rsperz':
          imagen ='torniquete'+imagen[6];
          break;
      
        case 'riirzz':
        case 'rnsilr':
        case 'rspirz':
          imagen='compresion'+imagen[6];
          break;
      }

      return imagen;
}
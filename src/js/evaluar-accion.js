import '../css/componentes.css'


// Evalua orden de evaluarAcción, evento generado e imagen para ver acierto o error
export const evaluarAcción = (orden, evento, imagen)=>{

    switch (orden) {
        case 1:
            if       (imagen[0] == 'v' && evento == 'btnVerde'){
                return 'CORRECTO';
            }else if (imagen[0] == 'v'&& evento != 'btnVerde' ){
                return 'ERROR_VERDE';
            }else if (imagen[1] == 'n'&& evento == 'btnRespira' ){
                return 'NO RESPIRA';
            }else if (imagen[1] == 's'&& evento == 'btnRespira'){
                return 'RESPIRA NORMAL';
            }else if (imagen[1] == 'r'&& evento == 'btnRespira'){ 
                return 'RESPIRA<br>MUY RÁPIDO';
            }else if (imagen[1] == 'e'&& evento == 'btnRespira'){ 
                return 'RESPIRA<br>MUY RÁPIDO';
            }else if (imagen[1] == 'i'&& evento == 'btnRespira'){ 
                return 'RESPIRA<br>MUY RÁPIDO';
            }else if ((imagen[1] == 'n'|| imagen[1] == 's'|| imagen[1] == 'r'
                    || imagen[1] == 'r' || imagen[1] == 'e'|| imagen[1] == 'i')
                    && evento != 'btnRespira'){ 
                return 'ERROR_RESPIRA';
            }
        break;

        case 2:
            if(imagen[2] == 'n' && evento == 'btnAbro'){
                return 'SIGUE SIN<br>RESPIRAR';
            }else if (imagen[2] == 'n' && evento != 'btnAbro'){
                return 'ERROR_ABRIR_VIA';
            }else if (imagen[2] =='s' && evento == 'btnAbro'){
                if( imagen[3] =='e'){
                    return 'AHORA SÍ RESPIRO';
                } else if ( imagen[3] =='i'){
                    return 'AHORA SÍ RESPIRO';
                }else{
                    return 'AHORA SÍ RESPIRO';
                }
            }else if (imagen[2] =='s' && evento != 'btnAbro'){
                return 'ERROR_ABRIR_VIA';     
            }else if (imagen[2] =='p' && evento == 'btnPulso'){
                return 'NO TIENE PULSO';
            }else if (imagen[2] =='u' && evento == 'btnPulso'){
                return 'SÍ TIENE PULSO';
            }else if ((imagen[2] =='p'||imagen[2] =='u')  && evento != 'btnPulso'){
                return 'ERROR_PULSO';
            }else if (imagen[2] =='i' && evento == 'compresion'){
                return 'BUENA COMPRESIÓN';
            }else if (imagen[2] =='i' && evento != 'compresion'){  
                return 'ERROR_COMPRESION';
            }else if (imagen[2] =='e' && evento == 'torniquete'){
                return 'BUEN TORNIQUETE';
            }else if (imagen[2] =='e' && evento != 'torniquete'){
                return 'ERROR_TORNIQUETE';
            }else if (imagen[2] =='r' && evento == 'btnRojo'){
                return 'CORRECTO';
            }else if (imagen[2] =='r' && evento != 'btnRojo'){
                return 'ERROR_ROJO_1';
            }
        break;

        case 3:
            if       (imagen[3] == 'n' && evento == 'btnNegro'){
                return 'CORRECTO';
            }else if (imagen[3] =='n'&& imagen[2] =='n' && evento != 'btnNegro'){
                return 'ERROR_NEGRO';
            }else if (imagen[3] =='e'&& evento == 'torniquete'){
                return 'BUEN TORNIQUETE';
            }else if (imagen[3] =='e' && imagen[2] =='s'&& evento != 'torniquete'){
                return 'ERROR_TORNIQUETE_2';
            }else if (imagen[3] =='e' && imagen[2] =='p'&& evento != 'torniquete'){
                return 'ERROR_TORNIQUETE_3';
            }else if (imagen[3] =='i' && evento == 'compresion'){
                return 'BUENA COMPRESIÓN';
            }else if (imagen[3] =='i' && imagen[2] =='p' &&evento != 'compresion'){
                return 'ERROR_COMPRESION_2';
            }else if (imagen[3] =='i' && imagen[2] =='s' && evento != 'compresion'){
                return 'ERROR_COMPRESION_3';
            }else if (imagen[3] =='l' && evento == 'btnPosLate'){
                return 'BUENA<br>POSICIÓN LATERAL';
            }else if (imagen[3] =='l' && evento != 'btnPosLate'){
                return 'ERROR_POSICION';
            }else if (imagen[3] =='s' && evento == 'btnOrdenes'){
                return 'SÍ OBEDECE ÓRDENES';
            }else if (imagen[3] =='n' && evento == 'btnOrdenes'){
                return 'NO OBEDECE ÓRDENES';
            }else if ((imagen[3] =='s'|| imagen[3] =='n')&& evento != 'btnOrdenes'){
                return 'ERROR_ORDENES';
            }else if (imagen[3] =='r' && evento == 'btnRojo'){
                return 'CORRECTO';
            }else if (imagen[3] =='r' && imagen[2] =='e' && evento != 'btnRojo'){
                return 'ERROR_ROJO_1';
            }else if (imagen[3] =='r' && imagen[2] =='p' && evento != 'btnRojo'){
                return 'ERROR_ROJO_2';
            }else if (imagen[3] =='r' && imagen[2] =='i' && evento != 'btnRojo'){
                return 'ERROR_ROJO_1';
        }
        break;

        case 4:
            if       (imagen[4] == 'l' && evento == 'btnPosLate'){
                return 'BUENA<br>POSICIÓN LATERAL';
            }else if (imagen[4] =='l' && evento != 'btnPosLate'){
                return 'ERROR_POSICION';
            }else if (imagen[4] =='r' && evento == 'btnRojo'){
                return 'CORRECTO';
            }else if (imagen[4] =='r' && imagen[3] =='l' &&evento != 'btnRojo'){
                return 'ERROR_ROJO_3';
            }else if (imagen[4] =='r' && imagen[3] =='e' &&evento != 'btnRojo'){
                return 'ERROR_ROJO_5';
            }else if (imagen[4] =='r' && imagen[3] =='n' &&evento != 'btnRojo'){
                return 'ERROR_ROJO_4';
            }else if (imagen[4] =='r' && imagen[3] =='i' &&evento != 'btnRojo'){
                return 'ERROR_ROJO_5';
            }else if (imagen[4] =='a' && evento == 'btnAmarillo'){
                return 'CORRECTO';
            }else if (imagen[4] =='a' && evento != 'btnAmarillo'){
                return 'ERROR_AMARILLO';
            }
        break;
        
        case 5:
            if(imagen[5] == 'r' && evento == 'btnRojo'){
                return 'CORRECTO';
            }else if (imagen[5] =='r' && evento != 'btnRojo'){
                return 'ERROR_ROJO_3';
            }
            return 'ERROR';
        break; 
    };
};
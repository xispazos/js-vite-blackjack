import { pedirCarta, valorCarta, crearCartaHTML } from './';


/**
 * Turno de la computadora
 * 
 * @param {Number} puntosMinimos ptos minimos que neceita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los ptos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error ("Son necesarios unos puntos mínimos");
    if (!puntosHTML) throw new Error ("Argumento de puntosHTML es necesario");
    
    /* if (!deck) throw new Error ("No hay cartas en el deck"); */
    /* La línea de arriba se puede obviar con un deck = []*/
    
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta (deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML (carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
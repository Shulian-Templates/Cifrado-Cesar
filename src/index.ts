// Importamos las funciones de consola para leer datos
import { preguntar } from './lib/consola.ts';

// Acá empieza tu programa — podés modificar estas líneas
let nombre = preguntar('¿Cómo te llamás? ');
console.log(`¡Hola, ${nombre}!`);

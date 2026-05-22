import readlineSync from 'readline-sync';

/**
 * Le hace una pregunta al usuario y devuelve su respuesta como texto.
 *
 * @param pregunta - El texto que se muestra al usuario.
 * @returns La respuesta ingresada por el usuario (sin espacios al inicio o al final).
 * @example
 * const nombre = preguntar('¿Cómo te llamás? ');
 * console.log(`¡Hola, ${nombre}!`);
 */
export function preguntar(pregunta: string): string {
  return readlineSync.question(pregunta).trim();
}

/**
 * Le hace una pregunta al usuario y devuelve su respuesta como número.
 * Si el usuario ingresa algo que no es un número, vuelve a preguntar
 * hasta recibir un valor válido.
 *
 * @param pregunta - El texto que se muestra al usuario.
 * @returns El número ingresado por el usuario.
 * @example
 * const edad = preguntarNumero('¿Cuántos años tenés? ');
 * console.log(`Tenés ${edad} años.`);
 */
export function preguntarNumero(pregunta: string): number {
  let numero: number;
  do {
    const texto = preguntar(pregunta);
    numero = Number(texto);
    if (isNaN(numero)) {
      console.log('Por favor ingresá un número válido.');
    }
  } while (isNaN(numero));
  return numero;
}

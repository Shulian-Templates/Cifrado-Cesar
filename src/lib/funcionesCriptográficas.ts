// prettier-ignore
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * Cifra una palabra usando el cifrado César con la clave dada.
 * Los caracteres que no pertenecen al alfabeto español se dejan sin cambios.
 * Las mayúsculas son cifradas y devueltas en mayúscula.
 * @param palabra - La palabra a cifrar.
 * @param clave - El desplazamiento a aplicar (puede ser negativo).
 * @returns La palabra cifrada.
 */
export function cifrar(palabra: string, clave: number): string {
  let palabraCifrada: string = '';
  for (let i = 0; i < palabra.length; i++) {
    let letra: string = palabra[i];
    // Reviso si es mayúscula para convertirla a minúscula y luego cifrarla, y después volverla mayúscula
    let esMayuscula: boolean = letra === letra.toUpperCase();
    if (esMayuscula) {
      letra = letra.toLowerCase();
    }
    let posicion: number = letras.indexOf(letra);
    // Si la letra no está en el alfabeto, la dejamos igual
    if (posicion === -1) {
      palabraCifrada += letra;
    } else {
      let nuevaPosicion: number = (posicion + clave) % letras.length;
      if (nuevaPosicion < 0) {
        nuevaPosicion = letras.length + nuevaPosicion;
      }
      let nuevaLetra: string = letras[nuevaPosicion];
      if (esMayuscula) {
        nuevaLetra = nuevaLetra.toUpperCase();
      }
      palabraCifrada += nuevaLetra;
    }
  }
  return palabraCifrada;
}

/**
 * Descifra una palabra cifrada con el cifrado César usando la clave dada.
 * Equivalente a cifrar con la clave negativa.
 * @param palabra - La palabra a descifrar.
 * @param clave - El desplazamiento original usado para cifrar.
 * @returns La palabra descifrada.
 */
export function descifrar(palabra: string, clave: number): string {
  return cifrar(palabra, -clave);
}

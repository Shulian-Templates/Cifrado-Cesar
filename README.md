# Cifrado César

Un programa que cifra y descifra mensajes usando el cifrado César.

---

## Consigna base

El cifrado César es una de las primeras técnicas de encriptación de mensajes. Pueden leer más acá: https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar.

Para hacerlo, ya cuentan con dos funciones hechas:

- `cifrar`: recibe una palabra (string) y una clave (number), y devuelve la palabra cifrada.
- `descifrar`: recibe una palabra cifrada (string) y una clave (number), y devuelve la palabra descifrada.

Las funciones están en `src/lib/funcionesCriptográficas.ts` y ya están importadas en `src/index.ts`. Las funciones tienen código con algunas cosas que no vimos, pero no se preocupen, ustedes tienen que usarlas solamente.

Completar el programa para que tome 3 inputs del usuario con `preguntar`:

1. Una palabra
2. Una clave (un número)
3. Una acción a realizar: `cifrar` o `descifrar`

Y luego imprima el resultado con `console.log`.

### Ejemplo

```
Ingresá una palabra: hola
Ingresá la clave: 3
¿Qué querés hacer? (cifrar/descifrar): cifrar
krñd
```

### Mensajes para descifrar

Una vez que tengan el programa funcionando, descifren estos mensajes:

- `"¿fmxntpy fg, ndgfa?"` con clave -15
- `"sz hsbiwrd rs zo kwro, sz jbwksghd n idrd zd rsaoh"` con clave 42

Pueden buscar a qué están haciendo referencia googleándolas.

---

## Consigna manija

### Tarjetas de crédito

La validación de tarjetas de crédito depende de muchos factores. En particular, los primeros dígitos suelen corresponder a la red a la que pertenece. Vamos a hacer un programa que, dado un número de tarjeta de crédito, determine a qué red pertenece.

Nos vamos a concentrar en las 3 redes más usadas en Argentina:

- **AMEX**: comienza con 34 o 37
- **VISA**: comienza con 4
- **MASTERCARD**: comienza con 51, 52, 53, 54 o 55

Si la tarjeta no pertenece a ninguna de estas redes, mostrar `Desconocida`.

Para hacernos la vida un poco más sencilla, crear una función `obtenerPrefijo` que, dado un número y el tamaño del prefijo, devuelva el prefijo. Por ejemplo, `obtenerPrefijo(4567890100755987, 2)` devuelve 45.

**TIPS IMPORTANTES**

- En `obtenerPrefijo`, la potencia de 10 por la cual hay que dividir es `longitudNumero - longitudPrefijo`. Para simplificar, todas las tarjetas son de 16 dígitos, por lo tanto `longitudNumero = 16`.
- JavaScript no tiene división entera, pero pueden lograr el mismo efecto redondeando para abajo con `Math.floor`.

El programa va en `src/manija.ts`. Toma el número de tarjeta por `preguntar` e imprime el resultado con `console.log`.

---

## ¿Qué hay que editar?

Para la consigna base:

```
src/index.ts
```

Para la consigna manija:

```
src/manija.ts
```

Los archivos `src/lib/consola.ts` y `src/lib/funcionesCriptográficas.ts` ya están completos y no hace falta tocarlos.

---

## Primeros pasos

Antes de poder correr el programa, hay que instalar las dependencias del proyecto. Esto se hace **una sola vez** con:

```bash
npm install
```

---

## Cómo correr el programa

```bash
npm run start
```

Para correr la manija:

```bash
npx tsx src/manija.ts
```

---

## Tests

El proyecto incluye tests automáticos que se usan para la corrección:

```bash
npm run test-base    # tests de la consigna base
npm run test-manija  # tests de la consigna manija
npm test             # ambos
```

No hace falta entenderlos ni modificarlos. Son para verificar que el programa funciona correctamente.

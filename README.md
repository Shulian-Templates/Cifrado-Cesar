# Plantilla TypeScript

Este es el proyecto base que vas a usar para programar en TypeScript. Ya viene configurado con todo lo necesario: solo tenés que instalar las dependencias y empezar a codear en `src/index.ts`.

---

## Requisitos

Antes de empezar, necesitás tener instalado:

- **Node.js 20 o superior** → [nodejs.org](https://nodejs.org) (bajá la versión **LTS**)
- **Visual Studio Code** → [code.visualstudio.com](https://code.visualstudio.com)

---

## Instalación paso a paso (Windows)

### 1. Instalar Node.js

1. Entrá a [nodejs.org](https://nodejs.org) y bajá el instalador de la versión **LTS**.
2. Ejecutá el instalador. En la pantalla de opciones, asegurate de que esté tildada la opción **"Add to PATH"**.
3. Una vez instalado, abrí una terminal nueva (buscá **"PowerShell"** o **"Símbolo del sistema"** en el menú Inicio) y verificá que funcione:

```
node --version
npm --version
```

Si ves números de versión, Node está instalado correctamente.

### 2. Abrir el proyecto en VS Code

1. Abrí VS Code.
2. Usá **Archivo → Abrir carpeta** y seleccioná la carpeta de este proyecto.
3. VS Code va a mostrar una notificación en la esquina inferior derecha preguntando si querés instalar las extensiones recomendadas. Hacé clic en **"Instalar"**.

   > Si no apareció la notificación, podés instalar las extensiones manualmente buscando **"ESLint"** y **"Prettier"** en la pestaña de extensiones (ícono de cuadraditos en la barra lateral).

### 3. Instalar las dependencias del proyecto

1. Abrí la terminal integrada de VS Code con **Ctrl + `** (la tecla de tilde invertida, arriba del Tab).
2. Ejecutá:

```
npm install
```

Esto descarga todas las herramientas que el proyecto necesita. Solo tenés que hacerlo una vez.

### 4. Correr el programa

```
npm start
```

El programa va a ejecutarse y pedirte tu nombre. ¡Listo, ya funciona!

---

## Cómo correr tu programa

| Comando | ¿Qué hace? |
|---|---|
| `npm start` | Ejecuta `src/index.ts` una sola vez |
| `npm run dev` | Ejecuta `src/index.ts` y lo **reinicia automáticamente** cada vez que guardás un cambio |

Para la mayoría de los ejercicios vas a usar `npm start`. Usá `npm run dev` cuando quieras probar cambios rápidamente sin tener que correr el comando cada vez.

---

## Dónde escribir tu código

- **`src/index.ts`** — Este es tu archivo principal. Acá escribís tu programa.
- **`src/lib/consola.ts`** — Funciones listas para usar:

| Función | ¿Qué hace? |
|---|---|
| `preguntar('texto')` | Le pregunta algo al usuario y devuelve la respuesta como texto |
| `preguntarNumero('texto')` | Le pregunta un número al usuario (vuelve a preguntar si no es un número válido) |

**Ejemplo de uso:**

```ts
import { preguntar, preguntarNumero } from './lib/consola.ts';

const nombre = preguntar('¿Tu nombre? ');
const edad = preguntarNumero('¿Tu edad? ');
console.log(`Hola ${nombre}, tenés ${edad} años.`);
```

---

## Revisar tu código con ESLint

VS Code va a subrayar automáticamente los errores mientras escribís. Pero también podés revisar todo desde la terminal:

| Comando | ¿Qué hace? |
|---|---|
| `npm run lint` | Muestra todos los problemas encontrados en tu código |
| `npm run lint:fix` | Arregla automáticamente los problemas que puede |
| `npm run format` | Formatea todo el código con Prettier |

> **Importante:** ESLint y Prettier son herramientas de ayuda — si hay errores de lint, tu programa **igual se puede ejecutar**. Son sugerencias para escribir mejor código, no bloqueos.

---

## Problemas comunes

### "npm no se reconoce como un comando interno o externo"

Node.js no está en el PATH del sistema. Soluciones:

1. Reiniciá la terminal después de instalar Node (cirrala y abría de nuevo).
2. Si sigue sin funcionar, desinstalá y volvé a instalar Node.js asegurándote de tildar **"Add to PATH"** durante la instalación.

### "La ejecución de scripts está deshabilitada en este sistema"

Este error aparece en PowerShell por la política de ejecución. Para solucionarlo:

1. Abrí PowerShell **como administrador** (clic derecho → "Ejecutar como administrador").
2. Ejecutá:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. Confirmá con `S` y presioná Enter.
4. Cerrar y volvé a abrir la terminal de VS Code.

### VS Code no formatea el código al guardar

1. Asegurate de haber instalado las extensiones recomendadas (**Prettier** y **ESLint**).
2. Fijate que en la esquina inferior derecha de VS Code, cuando tenés un archivo `.ts` abierto, diga **"Prettier"** como formateador.
3. Si dice otra cosa, hacé clic ahí y elegí **"Configurar el formateador predeterminado"** → **Prettier**.

### "Cannot find module" o errores de importación

Asegurate de haber corrido `npm install` en la carpeta del proyecto. Si el error persiste, borrá la carpeta `node_modules` y volvé a correr `npm install`.

---

## Resumen de todos los comandos

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias (solo la primera vez) |
| `npm start` | Ejecuta el programa una vez |
| `npm run dev` | Ejecuta el programa y lo reinicia al guardar |
| `npm run lint` | Muestra errores de estilo/tipado |
| `npm run lint:fix` | Corrige errores automáticamente |
| `npm run format` | Formatea el código con Prettier |

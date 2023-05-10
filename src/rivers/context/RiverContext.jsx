/**

El objeto RiverContext se utiliza para crear un contexto de React.
createContext es una función que crea un objeto de contexto con un valor inicial opcional.
En este caso, se está exportando un objeto de contexto vacío.
@typedef {object} RiverContext
@property {function} Provider - Un componente de proveedor que acepta un valor value y lo pasa a todos los componentes hijos que se encuentran en el árbol de componentes.
@property {object} Consumer - Un componente que consume el contexto proporcionado por el componente Provider.
@example
// Importar el objeto createContext desde la librería React
import { createContext } from "react";
// Crear un objeto de contexto con valor inicial opcional
export const RiverContext = createContext();
*/



import { createContext } from "react"; //receives initial value

export const RiverContext = createContext();

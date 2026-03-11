import { validaDeportista } from "./validaDeportista.js";

/**
 * @param { any } objetos
 * @returns {import("./DEPORTISTA.js").DEPORTISTA[]}
 */
export function validaDeportistas(objetos) {
  if (!Array.isArray(objetos)) throw new Error("no se recibió un arreglo.");

  /**
   * @type {import("./DEPORTISTA.js").DEPORTISTA[]}
   */
  const arreglo = [];

  for (const objeto of objetos) {
    arreglo.push(validaDeportista(objeto));
  }

  return arreglo;
}

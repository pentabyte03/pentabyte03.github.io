import { bdConsulta } from "./lib/bdConsulta.js";
import { validaDeportista } from "./validaDeportista.js";
import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";

/**
 * Lista todos los objetos, incluyendo los que tienen borrado lógico.
 */
export async function deportistaConsultaTodos() {
  return bdConsulta(
    Bd,
    [ALMACEN_DEPORTISTA],
    /**
     * @param {(resultado: import("./DEPORTISTA.js").DEPORTISTA[])=>void} resolve
     */
    (transaccion, resolve) => {
      const resultado = [];

      const consulta = transaccion.objectStore(ALMACEN_DEPORTISTA).openCursor();

      consulta.onsuccess = () => {
        const cursor = consulta.result;

        if (cursor === null) {
          resolve(resultado);
        } else {
          resultado.push(validaDeportista(cursor.value));

          cursor.continue();
        }
      };
    },
  );
}

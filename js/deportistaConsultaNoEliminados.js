import { ALMACEN_DEPORTISTA, Bd, INDICE_NOMBRE } from "./Bd.js";
import { bdConsulta } from "./lib/bdConsulta.js";
import { validaDeportista } from "./validaDeportista.js";

export async function deportistaConsultaNoEliminados() {
  return bdConsulta(
    Bd,
    [ALMACEN_DEPORTISTA],
    /**
     * @param {(resultado: import("./DEPORTISTA.js").DEPORTISTA[])=>void} resolve
     */
    (transaccion, resolve) => {
      const resultado = [];

      const almacen = transaccion.objectStore(ALMACEN_DEPORTISTA);

      // Usa el índice INDICE_NOMBRE para recuperar los datos ordenados.
      const indiceNombre = almacen.index(INDICE_NOMBRE);

      const consulta = indiceNombre.openCursor();

      consulta.onsuccess = () => {
        const cursor = consulta.result;

        if (cursor === null) {
          resolve(resultado);
        } else {
          const modelo = validaDeportista(cursor.value);

          if (modelo.DEP_ELIMINADO === 0) {
            resultado.push(modelo);
          }

          cursor.continue();
        }
      };
    },
  );
}

import { bdConsulta } from "./lib/bdConsulta.js";
import { validaDeportista } from "./validaDeportista.js";
import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";

/**
 * @param {string} id
 */
export async function deportistaBusca(id) {
  return bdConsulta(
    Bd,
    [ALMACEN_DEPORTISTA],
    /**
     * @param {(resultado: import("./DEPORTISTA.js").DEPORTISTA|undefined)
     *                                                            => any} resolve
     */
    (transaccion, resolve) => {
      const consulta = transaccion.objectStore(ALMACEN_DEPORTISTA).get(id);

      consulta.onsuccess = () => {
        const objeto = consulta.result;

        if (objeto !== undefined) {
          const modelo = validaDeportista(objeto);

          if (modelo.DEP_ELIMINADO === 0) {
            resolve(modelo);
            return;
          }
        }

        resolve(undefined);
      };
    },
  );
}

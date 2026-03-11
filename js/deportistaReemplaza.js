import { bdEjecuta } from "./lib/bdEjecuta.js";
import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";

/**
 * Borra el contenido del almacén DEPORTISTA y guarda nuevos deportistas.
 * @param {import("./DEPORTISTA.js").DEPORTISTA[]} nuevosDeportistas
 */
export async function deportistasReemplaza(nuevosDeportistas) {
  return bdEjecuta(Bd, [ALMACEN_DEPORTISTA], (transaccion) => {
    const almacen = transaccion.objectStore(ALMACEN_DEPORTISTA);

    almacen.clear();

    for (const objeto of nuevosDeportistas) {
      almacen.add(objeto);
    }
  });
}

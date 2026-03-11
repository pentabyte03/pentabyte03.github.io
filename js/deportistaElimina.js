import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";
import { bdEjecuta } from "./lib/bdEjecuta.js";
import { deportistaBusca } from "./deportistaBusca.js";

/**
 * @param { string } id
 */
export async function deportistaElimina(id) {
  if (confirm("Confirma la eliminación")) {
    const modelo = await deportistaBusca(id);

    if (modelo !== undefined) {
      modelo.DEP_MODIFICACION = Date.now();
      modelo.DEP_ELIMINADO = 1;

      await bdEjecuta(Bd, [ALMACEN_DEPORTISTA], (transaccion) => {
        const almacen = transaccion.objectStore(ALMACEN_DEPORTISTA);
        almacen.put(modelo);
      });
    }

    location.href = "index.html";
  }
}

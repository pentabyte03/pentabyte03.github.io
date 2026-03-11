import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";
import { bdEjecuta } from "./lib/bdEjecuta.js";
import { recibeTextoObligatorio } from "./lib/recibeTextoObligatorio.js";
import { deportistaBusca } from "./deportistaBusca.js";

/**
 * @param {SubmitEvent} event
 * @param {string} id
 */
export async function deportistaModifica(event, id) {
  event.preventDefault();
  const target = event.target;

  if (!(target instanceof HTMLFormElement))
    throw new Error("target no es de tipo form.");

  const formData = new FormData(target);

  const nombre = recibeTextoObligatorio(formData, "nombre");

  const anterior = await deportistaBusca(id);

  if (anterior !== undefined) {
    anterior.DEP_NOMBRE = nombre;
    anterior.DEP_MODIFICACION = Date.now();

    await bdEjecuta(Bd, [ALMACEN_DEPORTISTA], (transaccion) => {
      const almacen = transaccion.objectStore(ALMACEN_DEPORTISTA);
      almacen.put(anterior);
    });

    location.href = "index.html";
  }
}

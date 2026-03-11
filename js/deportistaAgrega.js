import { ALMACEN_DEPORTISTA, Bd } from "./Bd.js";
import { bdEjecuta } from "./lib/bdEjecuta.js";
import { creaIdCliente } from "./lib/creaIdCliente.js";
import { recibeTextoObligatorio } from "./lib/recibeTextoObligatorio.js";

/**
 * @param {SubmitEvent} event
 */
export async function deportistaAgrega(event) {
  event.preventDefault();
  const target = event.target;

  if (!(target instanceof HTMLFormElement))
    throw new Error("target no es de tipo form.");

  const formData = new FormData(target);

  const modelo = {
    DEP_ID: creaIdCliente(Date.now().toString()),
    DEP_NOMBRE: recibeTextoObligatorio(formData, "nombre"),
    DEP_DEPORTE: recibeTextoObligatorio(formData, "deporte"),
    DEP_EQUIPO: recibeTextoObligatorio(formData, "equipo"),
    DEP_MODIFICACION: Date.now(),
    DEP_ELIMINADO: 0,
  };

  await bdEjecuta(Bd, [ALMACEN_DEPORTISTA], (transaccion) => {
    const almacen = transaccion.objectStore(ALMACEN_DEPORTISTA);
    almacen.add(modelo);
  });

  location.href = "index.html";
}

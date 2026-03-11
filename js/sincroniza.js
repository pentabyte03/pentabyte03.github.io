import { deportistaConsultaTodos } from "./deportistaConsultaTodos.js";
import { deportistasReemplaza } from "./deportistaReemplaza.js";
import { esperaUnPocoYSincroniza } from "./esperaUnPocoYSincroniza.js";
import { consume } from "./lib/consume.js";
import { enviaJsonRecibeJson } from "./lib/enviaJsonRecibeJson.js";
import { muestraError } from "./lib/muestraError.js";
import { renderiza } from "./renderiza.js";
import { validaDeportistas } from "./validaDeportistas.js";

export async function sincroniza() {
  try {
    if (navigator.onLine) {
      const todos = await deportistaConsultaTodos();

      const respuesta = await consume(
        enviaJsonRecibeJson("php/sincroniza.php", todos),
      );

      const deportistas = validaDeportistas(await respuesta.json());

      await deportistasReemplaza(deportistas);

      renderiza(deportistas);
    }
  } catch (error) {
    muestraError(error);
  }

  esperaUnPocoYSincroniza();
}

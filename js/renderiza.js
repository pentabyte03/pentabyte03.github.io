import { htmlentities } from "./lib/htmlentities.js";
import { muestraObjeto } from "./lib/muestraObjeto.js";

/**
 * @param {import("./DEPORTISTA.js").DEPORTISTA[]} deportistas
 */
export function renderiza(deportistas) {
  let render = "";

  for (const modelo of deportistas) {
    const nombre = htmlentities(modelo.DEP_NOMBRE);
    const deporte = htmlentities(modelo.DEP_DEPORTE);
    const equipo = htmlentities(modelo.DEP_EQUIPO);

    const searchParams = new URLSearchParams([["id", modelo.DEP_ID]]);
    const params = htmlentities(searchParams.toString());

    render += /* html */ `
<li class="md-two-line">
  <a href="modifica.html?${params}">
    <span class="headline">${nombre}</span>
    <span class="supporting">
      ${deporte} - ${equipo}
    </span>
  </a>
</li>`;
  }

  muestraObjeto(document, {
    lista: { innerHTML: render },
  });
}

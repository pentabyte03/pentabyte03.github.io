export function validaDeportista(objeto) {
  if (typeof objeto !== "object")
    throw new Error("El modelo debe ser un objeto.");

  if (typeof objeto.DEP_ID !== "string" || objeto.DEP_ID === "")
    throw new Error("DEP_ID inválido.");

  if (typeof objeto.DEP_NOMBRE !== "string" || objeto.DEP_NOMBRE === "")
    throw new Error("DEP_NOMBRE inválido.");

  if (typeof objeto.DEP_DEPORTE !== "string" || objeto.DEP_DEPORTE === "")
    throw new Error("DEP_DEPORTE inválido.");

  if (typeof objeto.DEP_EQUIPO !== "string" || objeto.DEP_EQUIPO === "")
    throw new Error("DEP_EQUIPO inválido.");

  if (typeof objeto.DEP_MODIFICACION !== "number")
    throw new Error("DEP_MODIFICACION inválido.");

  if (typeof objeto.DEP_ELIMINADO !== "number")
    throw new Error("DEP_ELIMINADO inválido.");

  return objeto;
}

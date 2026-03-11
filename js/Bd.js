export const ALMACEN_DEPORTISTA = "DEPORTISTA";
export const DEP_ID = "DEP_ID";
export const INDICE_NOMBRE = "INDICE_NOMBRE";
export const DEP_NOMBRE = "DEP_NOMBRE";

const BD_NOMBRE = "sincro";
const BD_VERSION = 1;

/** @type { Promise<IDBDatabase> } */
export const Bd = new Promise((resolve, reject) => {
  const solicitud = indexedDB.open(BD_NOMBRE, BD_VERSION);

  solicitud.onerror = () => reject(solicitud.error);

  solicitud.onsuccess = () => resolve(solicitud.result);

  solicitud.onupgradeneeded = () => {
    const bd = solicitud.result;

    if (bd.objectStoreNames.contains(ALMACEN_DEPORTISTA)) {
      bd.deleteObjectStore(ALMACEN_DEPORTISTA);
    }

    const almacenDeportista = bd.createObjectStore(ALMACEN_DEPORTISTA, {
      keyPath: DEP_ID,
    });

    almacenDeportista.createIndex(INDICE_NOMBRE, DEP_NOMBRE);
  };
});

<?php

require_once __DIR__ . "/lib/manejaErrores.php";
require_once __DIR__ . "/lib/recibeJson.php";
require_once __DIR__ . "/lib/devuelveJson.php";
require_once __DIR__ . "/TABLA_DEPORTISTA.php";
require_once __DIR__ . "/validaDeportista.php";
require_once __DIR__ . "/deportistaAgrega.php";
require_once __DIR__ . "/deportistaBusca.php";
require_once __DIR__ . "/deportistaConsultaNoEliminados.php";
require_once __DIR__ . "/deportistaModifica.php";

$lista = recibeJson();

if (!is_array($lista)) {
 $lista = [];
}

foreach ($lista as $modelo) {

 $modeloEnElCliente = validaDeportista($modelo);
 $modeloEnElServidor = deportistaBusca($modeloEnElCliente[DEP_ID]);

 if ($modeloEnElServidor === false) {

  /* CONFLICTO: El modelo no ha estado en el servidor.
   * AGREGARLO solamente si no está eliminado. */
  if ($modeloEnElCliente[DEP_ELIMINADO] === 0) {
   deportistaAgrega($modeloEnElCliente);
  }

 } elseif (
  $modeloEnElServidor[DEP_ELIMINADO] === 0
  && $modeloEnElCliente[DEP_ELIMINADO] === 1
 ) {

  /* CONFLICTO: El registro está en el servidor, donde no se ha eliminado,
   * pero ha sido eliminado en el cliente.
   * Gana el cliente. */
  deportistaModifica($modeloEnElCliente);

 } else if (
  $modeloEnElCliente[DEP_ELIMINADO] === 0
  && $modeloEnElServidor[DEP_ELIMINADO] === 0
 ) {

  /* CONFLICTO: Registros en servidor y cliente.
   * GANA EL DE MAYOR FECHA. */
  if (
   $modeloEnElCliente[DEP_MODIFICACION] >
   $modeloEnElServidor[DEP_MODIFICACION]
  ) {
   deportistaModifica($modeloEnElCliente);
  }

 }
}

$lista = deportistaConsultaNoEliminados();

devuelveJson($lista);
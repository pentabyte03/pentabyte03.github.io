<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_DEPORTISTA.php";

/**
 * @param array{
 *   DEP_ID: string,
 *   DEP_NOMBRE: string,
 *   DEP_DEPORTE: string,
 *   DEP_EQUIPO: string,
 *   DEP_MODIFICACION: int,
 *   DEP_ELIMINADO: int
 *  } $modelo
 */
function deportistaAgrega(array $modelo)
{
 $bd = Bd::pdo();
 $stmt = $bd->prepare(
  "INSERT INTO DEPORTISTA (
    DEP_ID, DEP_NOMBRE, DEP_DEPORTE, DEP_EQUIPO, DEP_MODIFICACION, DEP_ELIMINADO
   ) values (
    :DEP_ID, :DEP_NOMBRE, :DEP_DEPORTE, :DEP_EQUIPO, :DEP_MODIFICACION, :DEP_ELIMINADO
   )"
 );
 $stmt->execute([
  ":DEP_ID" => $modelo[DEP_ID],
  ":DEP_NOMBRE" => $modelo[DEP_NOMBRE],
  ":DEP_DEPORTE" => $modelo[DEP_DEPORTE],
  ":DEP_EQUIPO" => $modelo[DEP_EQUIPO],
  ":DEP_MODIFICACION" => $modelo[DEP_MODIFICACION],
  ":DEP_ELIMINADO" => $modelo[DEP_ELIMINADO],
 ]);
}
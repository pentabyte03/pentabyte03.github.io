<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_DEPORTISTA.php";

/**
 * @return false | array{
 *   DEP_ID: string,
 *   DEP_NOMBRE: string,
 *   DEP_DEPORTE: string,
 *   DEP_EQUIPO: string,
 *   DEP_MODIFICACION: int,
 *   DEP_ELIMINADO: int
 *  }
 */
function deportistaBusca(string $id): false|array
{
    $bd = Bd::pdo();
    $stmt = $bd->prepare("SELECT * FROM DEPORTISTA WHERE DEP_ID = :DEP_ID");
    $stmt->execute([":DEP_ID" => $id]);
    $modelo = $stmt->fetch(PDO::FETCH_ASSOC);
    return $modelo;
}

<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_DEPORTISTA.php";

/**
 * @return array{
 *   DEP_ID: string,
 *   DEP_NOMBRE: string,
 *   DEP_DEPORTE: string,
 *   DEP_EQUIPO: string,
 *   DEP_MODIFICACION: int,
 *   DEP_ELIMINADO: int
 *  }[]
 */
function deportistaConsultaNoEliminados()
{
    $bd = Bd::pdo();
    $stmt = $bd->query(
        "SELECT * FROM DEPORTISTA WHERE DEP_ELIMINADO = 0 ORDER BY DEP_NOMBRE"
    );
    $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $lista;
}

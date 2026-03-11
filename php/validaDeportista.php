<?php

require_once __DIR__ . "/lib/BAD_REQUEST.php";
require_once __DIR__ . "/lib/ProblemDetailsException.php";
require_once __DIR__ . "/TABLA_DEPORTISTA.php";

function validaDeportista($objeto)
{
 if (!isset($objeto->DEP_ELIMINADO) || !is_int($objeto->DEP_ELIMINADO))
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El campo eliminado debe ser entero.",
   "type" => "/errors/eliminadoincorrecto.html",
  ]);

 if (
  !isset($objeto->DEP_ID)
  || !is_string($objeto->DEP_ID)
  || $objeto->DEP_ID === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El id debe ser texto que no esté en blanco.",
   "type" => "/errors/idincorrecto.html",
  ]);

 if (!isset($objeto->DEP_MODIFICACION) || !is_int($objeto->DEP_MODIFICACION))
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "La modificacion debe ser número.",
   "type" => "/errors/modificacionincorrecta.html",
  ]);

 if (
  !isset($objeto->DEP_NOMBRE)
  || !is_string($objeto->DEP_NOMBRE)
  || $objeto->DEP_NOMBRE === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El nombre debe ser texto que no esté en blanco.",
   "type" => "/errors/nombreincorrecto.html",
  ]);

 if (
  !isset($objeto->DEP_DEPORTE)
  || !is_string($objeto->DEP_DEPORTE)
  || $objeto->DEP_DEPORTE === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El deporte debe ser texto que no esté en blanco.",
   "type" => "/errors/deporteincorrecto.html",
  ]);

 if (
  !isset($objeto->DEP_EQUIPO)
  || !is_string($objeto->DEP_EQUIPO)
  || $objeto->DEP_EQUIPO === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El equipo debe ser texto que no esté en blanco.",
   "type" => "/errors/equipoincorrecto.html",
  ]);

 return [
  DEP_ELIMINADO => $objeto->DEP_ELIMINADO,
  DEP_ID => $objeto->DEP_ID,
  DEP_NOMBRE => $objeto->DEP_NOMBRE,
  DEP_DEPORTE => $objeto->DEP_DEPORTE,
  DEP_EQUIPO => $objeto->DEP_EQUIPO,
  DEP_MODIFICACION => $objeto->DEP_MODIFICACION,
 ];
}
<?php

class Bd
{

  private static ?PDO $pdo = null;

  static function pdo(): PDO
  {
    if (self::$pdo === null) {
      self::$pdo = new PDO(
        "sqlite:" . __DIR__ . "/sincro.db",
        null,
        null,
        [
          PDO::ATTR_PERSISTENT => false,
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
      );

      self::$pdo->exec(
        'CREATE TABLE IF NOT EXISTS DEPORTISTA (
      DEP_ID TEXT NOT NULL,
      DEP_NOMBRE TEXT NOT NULL,
      DEP_DEPORTE TEXT NOT NULL,
      DEP_EQUIPO TEXT NOT NULL,
      DEP_MODIFICACION INTEGER NOT NULL,
      DEP_ELIMINADO INTEGER NOT NULL,
      CONSTRAINT DEP_PK
       PRIMARY KEY(DEP_ID),
      CONSTRAINT DEP_ID_NV
       CHECK(LENGTH(DEP_ID) > 0),
      CONSTRAINT DEP_NOM_NV
       CHECK(LENGTH(DEP_NOMBRE) > 0),
      CONSTRAINT DEP_DEP_NV
       CHECK(LENGTH(DEP_DEPORTE) > 0),
      CONSTRAINT DEP_EQ_NV
       CHECK(LENGTH(DEP_EQUIPO) > 0)
     )'
      );
    }

    return self::$pdo;
  }
}

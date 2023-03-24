<?php
require_once "Dao/StatusItemDao.php";
class StatusItemController
{

    public static function getAll()
    {
        return json_encode(StatusItemDao::getAll());

    }
}
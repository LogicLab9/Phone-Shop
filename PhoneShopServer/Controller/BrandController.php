<?php
require_once("Dao/BrandDao.php");
class BrandController
{
public static function getAll(){
    return json_encode(BrandDao::getAll());
}
}
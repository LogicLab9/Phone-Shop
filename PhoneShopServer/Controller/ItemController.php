<?php
require_once ("Dao/ItemDao.php");

class ItemController
{
public static function getAll(){return json_encode(ItemDao::getAll());}

}
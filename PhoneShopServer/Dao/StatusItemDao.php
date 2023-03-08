<?php

 require_once("CommonDao.php");
 require_once("../Entity/StatusItem.php");

class StatusItemDao
{
    public static function getById($id){
        $query =" select * from statusitem WHERE id = '$id' ";
        $result = CommonDao::getResults($query);
        if($result){
            $row = $result->fetch_assoc();
            $statusItem = new StatusItem();
            $statusItem->setId($row['id']);
            $statusItem->setName($row['name']);
            return $statusItem;
        }
    }

}
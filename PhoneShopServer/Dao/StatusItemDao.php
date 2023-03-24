<?php

 require_once("CommonDao.php");
 require_once("Entity/StatusItem.php");

class StatusItemDao
{
    private static function setData($row){
        $statusItem = new StatusItem();
        $statusItem->setId($row['id']);
        $statusItem->setName($row['name']);
        return $statusItem;
    }
    public static function getById($id){
        $query =" select * from statusitem WHERE id = '$id' ";
        $result = CommonDao::getResults($query);
        if($result){
            $row = $result->fetch_assoc();
            $statusItem =StatusItemDao::setData($row);
            return $statusItem;
        }
    }

    public static function getAll()
    {
        $query =" select * from statusitem";
        $result = CommonDao::getResults($query);
        $statuses=array();
        if($result){
            while ($row = $result->fetch_assoc()){
                $statusItem =StatusItemDao::setData($row);
                $statuses[]=$statusItem;
            }
            return $statuses;

        }
    }

}
<?php

    require_once("CommonDao.php");
    require_once("../Entity/Brand.php");
class BrandDao
{

    public static function getById($id){
        $query =" select * from brnad WHERE id = '$id' ";
        $result = CommonDao::getResults($query);
        if($result){
            $row = $result->fetch_assoc();
            $brand = new Brand();
            $brand->setId($row['id']);
            $brand->setName($row['name']);
            return $brand;
        }
    }

    public  static  function  getAll(){



    }

}


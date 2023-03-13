<?php

require_once("CommonDao.php");
require_once("Entity/Brand.php");

class BrandDao
{
    public static function getById($id)
    {
        $query = "select * from brand WHERE id = " . $id;
        $result = CommonDao::getResults($query);
        if ($result) {
            $row = $result->fetch_assoc();
            $brand = BrandDao::setData($row);
            return $brand;
        }
    }

    private static function setData($row)
    {
        $brand = new Brand();
        $brand->setId($row['id']);
        $brand->setName($row['name']);
        return $brand;
    }

    public static function getAll()
    {
        $query = "select * from brand";
        $result = CommonDao::getResults($query);

        if ($result) {
            $brands = array();
            while ($row = $result->fetch_assoc()) {
                $brand = BrandDao::setData($row);
                $brands[] = $brand;
            }
            return $brands;
        }


    }

}


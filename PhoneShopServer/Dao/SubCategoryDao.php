<?php
require_once("CommonDao.php");
require_once("Entity/SubCategory.php");

class SubCategoryDao
{
    public static function getById($id)
    {
        $query = " select * from subcategory WHERE id = '$id' ";
        $result = CommonDao::getResults($query);
        if ($result) {
            $row = $result->fetch_assoc();
            return SubCategoryDao::setData($row);
        }
    }

    private static function setData($row)
    {
        $subCategory = new SubCategory();
        $subCategory->setId($row['id']);
        $subCategory->setName($row['name']);
        return $subCategory;
    }

    public static function getAll()
    {
        $query = "select *from subcategory";
        $result = CommonDao::getResults($query);
        if ($result) {
            $subCategories=array();
            while ($row = $result->fetch_assoc()) {
                $subCategories[]= SubCategoryDao::setData($row);
            }
            return $subCategories;
        }
    }
}
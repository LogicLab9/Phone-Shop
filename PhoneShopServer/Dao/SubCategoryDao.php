<?php
   require_once("CommonDao.php");
   require_once("Entity/SubCategory.php");
class SubCategoryDao
{
    public static function getById($id){
        $query =" select * from subcategory WHERE id = '$id' ";
        $result = CommonDao::getResults($query);
        if($result){
            $row = $result->fetch_assoc();
            $subCategory = new SubCategory();
            $subCategory->setId($row['id']);
            $subCategory->setName($row['name']);
            return $subCategory;
        }
    }
}
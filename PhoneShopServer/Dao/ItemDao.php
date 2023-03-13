<?php
require_once("CommonDao.php");
require_once("Entity/Item.php");
require_once("BrandDao.php");
require_once("StatusItemDao.php");
require_once("SubCategoryDao.php");

class ItemDao
{
    private static function setdata($row){
        $item = new Item();
        $item->setId($row['id']);
        $item->setName($row['name']);
        $item->setPrice($row['price']);
        $item->setImage($row['image']);
        $item->setItemCode($row['ItemCode']);
        $item->setSubCategory(SubCategoryDao::getById($row['SubCategory_id']));
        $item->setStatusItem(StatusItemDao::getById($row['StatusItem_id']));
        $item->setBrand(BrandDao::getById($row['brand_id']));
        return $item;
    }
    public  static  function getAll(){

        $items = array();
        $query = "select * from item";
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
           $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByName($name)
    {
        $items = array();
        $query = "select * from item where name like '".$name."%'";
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByBrand($brand)
    {
        $items = array();
        $query = "select * from item where brand_id=".$brand;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getBySubCategory($subCategory)
    {
        $items = array();
        $query = "select * from item where SubCategory_id=".$subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndBrand($name, $brand)
    {
        $items = array();
        $query = "select * from item where name like '".$name."%' and brand_id=".$brand;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndSubCategory($name, $subCategory)
    {
        $items = array();
        $query = "select * from item where name like '".$name."%' and SubCategory_id=".$subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByBrandAndSubCategory($brand, $subCategory)
    {
        $items = array();
        $query = "select * from item where  brand_id=".$brand." and SubCategory_id=".$subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndBrandAndSubCategory($name, $brand, $subCategory)
    {
        $items = array();
        $query = "select * from item where name like '".$name."%' and brand_id=".$brand." and SubCategory_id=".$subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item =ItemDao::setdata($row);
            $items[] = $item;
        }
        return $items;
    }
}
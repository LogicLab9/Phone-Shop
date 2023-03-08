<?php
require_once("CommonDao.php");
require_once("../Entity/Item.php");
require_once("BrandDao.php");
require_once("StatusItemDao.php");
require_once("SubCategoryDao.php");

class ItemDao
{
    public  static  function getAll(){

        $items = array();
        $query = "select * from item";
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()){
            $item = new Item();
            $item->setId($row['id']);
            $item->setName($row['name']);
            $item->setPrice($row['price']);
            $item->setImage($row['image']);
            $item->setItemCode($row['itemCode']);
            $item->setSubCategory(SubCategoryDao::getById($row['Subcategory_id']));
            $item->setStatusItem(StatusItemDao::getById($row['StatusItem_id']));
            $item->setBrand(BrandDao::getById($row['brand_id']));
            $items[] = $item;
        }
        return $items;
    }
}
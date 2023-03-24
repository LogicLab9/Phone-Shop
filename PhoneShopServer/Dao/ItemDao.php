<?php
require_once("CommonDao.php");
require_once("Entity/Item.php");
require_once("BrandDao.php");
require_once("StatusItemDao.php");
require_once("SubCategoryDao.php");

class ItemDao
{
    public static function getAll()
    {

        $items = array();
        $query = "select * from item";
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    private static function setdata($row)
    {
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

    public static function getByName($name)
    {
        $items = array();
        $query = "select * from item where name like '" . $name . "%'";
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByBrand($brand)
    {
        $items = array();
        $query = "select * from item where brand_id=" . $brand;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getBySubCategory($subCategory)
    {
        $items = array();
        $query = "select * from item where SubCategory_id=" . $subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndBrand($name, $brand)
    {
        $items = array();
        $query = "select * from item where name like '" . $name . "%' and brand_id=" . $brand;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndSubCategory($name, $subCategory)
    {
        $items = array();
        $query = "select * from item where name like '" . $name . "%' and SubCategory_id=" . $subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByBrandAndSubCategory($brand, $subCategory)
    {
        $items = array();
        $query = "select * from item where  brand_id=" . $brand . " and SubCategory_id=" . $subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;

        }
        return $items;
    }

    public static function getByNameAndBrandAndSubCategory($name, $brand, $subCategory)
    {
        $items = array();
        $query = "select * from item where name like '" . $name . "%' and brand_id=" . $brand . " and SubCategory_id=" . $subCategory;
        $result = CommonDao::getResults($query);
        while ($row = $result->fetch_assoc()) {
            $item = ItemDao::setdata($row);
            $items[] = $item;
        }
        return $items;
    }

    public static function save($itemData, $image)

    {
        if ($itemData && $image) {
            if (!is_dir('images')) {
                mkdir('images');
            }
            $imagePath = 'images/' . $itemData ->name . '/';
            if (is_dir($imagePath)){

                $imagePath = 'images/' . $itemData ->name . '/'. $image['name'];
                move_uploaded_file($image['tmp_name'], $imagePath);
            }else{
                $imagePath = 'images/' . $itemData ->name . '/'. $image['name'];
                mkdir(dirname($imagePath));
                move_uploaded_file($image['tmp_name'], $imagePath. $image['name']);
            }

            $query = "insert into item (name,price,image,itemCode,StatusItem_id,SubCategory_id,brand_id) VALUES ('"
                . $itemData->name . "','"
                . $itemData->price . "','"
                . $imagePath . "','"
                . $itemData->itemCode . "','"
                . $itemData->statusItem->id . "','"
                . $itemData->subCategory->id . "','"
                . $itemData->brand->id .
                "')";
            return CommonDao::getResults($query);

        }



//        var_dump($itemData->image);
//        var_dump($_FILES["name"]);

//        if (!is_dir('images')) {
//            mkdir('images');
//        }
//        $image = $_FILES[$itemData->image] ?? null;
//        $imagePath = '';
//        if ($image) {
//
//            $imagePath = 'images/' . randomString(8) . '/' . $image['name'];
//            mkdir(dirname($imagePath));
//            move_uploaded_file($image['tmp_name'], $imagePath);
//        }
    }
}
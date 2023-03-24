<?php
require_once("Dao/ItemDao.php");

class ItemController
{
    public static function get($searchtext)
    {
        if ($searchtext == null) {
            return json_encode(ItemDao::getAll());
        } else {
            $name = null;
            $brand = null;
            $subCategory = null;
            $item = null;
            $data = explode("&", $searchtext);
            foreach ($data as $x) {
                $searchData = explode("=", $x)[0];
                $searchValue = explode("=", $x)[1];
//                var_dump("value =" . $searchValue . "Data =" . $searchData);
                switch ($searchData) {
                    case 'name':
                        $name = $searchValue;
                        break;
                    case 'brand':
                        $brand = $searchValue;
                        break;
                    case 'subcategory':
                        $subCategory = $searchValue;
                }
            }
            if ($name != null && $brand == null && $subCategory == null) {
                $item = ItemDao::getByName($name);
            } else if ($name == null && $brand != null && $subCategory == null) {
                $item = ItemDao::getByBrand($brand);

            } else if ($name == null && $brand == null && $subCategory != null) {
                $item = ItemDao::getBySubCategory($subCategory);

            } else if ($name != null && $brand != null && $subCategory == null) {
                $item = ItemDao::getByNameAndBrand($name, $brand);
            } else if ($name != null && $brand == null && $subCategory != null) {
                $item = ItemDao::getByNameAndSubCategory($name, $subCategory);
            } else if ($name == null && $brand != null && $subCategory != null) {
                $item = ItemDao::getByBrandAndSubCategory($brand, $subCategory);

            } else if ($name != null && $brand != null && $subCategory != null) {
                $item = ItemDao::getByNameAndBrandAndSubCategory($name, $brand, $subCategory);
            } else {
                $item = ItemDao::getAll();
            }
            return json_encode($item);

        }
    }

    public static function post($itemData,$images)
    {
        return ItemDao::save($itemData,$images);
    }

}
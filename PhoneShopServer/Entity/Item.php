<?php

class Item
{
    public $id;
    public $name;
    public $itemcode;
    public $image;
    public $price;
    public $statusItem;
    public $subcatogory;
    public $brand;

    function __construct(){}

    function getId(){ return $this->id;}
    function setId($id){ $this->id = $id;}

    function getName(){ return $this->name;}
    function setName($name){ $this->name = $name;}

    function getItemcode(){ return $this->itemcode;}
    function setItemcode($itemcode){ $this->itemcode = $itemcode;}

    function getStatusItem(){ return $this->statusItem;}
    function setStatusItem($statusItem){ $this->statusItem = $statusItem;}

    function getPrice(){ return $this->price;}
    function setPrice($price){ $this->price = $price;}

    function getImage(){ return $this->image;}
    function setImage($image){ $this->image = $image;}

    function getSubcatogory(){ return $this->subcatogory;}
    function setSubcatogory($subcatogory){ $this->subcatogory = $subcatogory;}

    function getBrand(){ return $this->brand;}
    function setBrand($brand){ $this->brand = $brand;}

}
?>
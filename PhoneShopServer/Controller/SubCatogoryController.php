<?php

class SubCatogoryController
{
    public static function getAll(){
        return json_encode(SubCategoryDao::getAll());
    }
}
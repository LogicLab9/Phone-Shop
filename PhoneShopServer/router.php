<?php

include_once "Controller/ItemController.php";

$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

$resource =  explode('?',(explode('/',$request)[4]))[0];

$output = null;

switch ($resource){
    case "items":
        switch ($method){
            case "GET": $output = ItemController::getAll();
                break;
        }
        break;

}
echo($output);


?>
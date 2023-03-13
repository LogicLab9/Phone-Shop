<?php


include_once "Controller/ItemController.php";
require_once "Controller/BrandController.php";
require_once "Controller/SubCatogoryController.php";

$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

$service = explode('?', explode('/', $request)[4])[0];
$resource = null;
$searchtext = null;
if (count(explode('?', $request)) > 1) {
    $searchtext = explode('?', explode('/', $request)[4])[1];
}
if (count(explode('/', $request)) > 5) {
    $resource = explode('?', (explode('/', $request)[5]))[0];
}
$output = null;

switch ($service) {
    case "items":
        switch ($method) {
            case "GET":
                $output =ItemController::get($searchtext);
                break;
        }
        break;
    case "brands":
        switch ($method) {
            case "GET":
                $output = BrandController::getAll();
        }
        break;
    case "subcategories":
        switch ($method) {
            case "GET":
                $output = SubCatogoryController::getAll();
        }
}
echo($output);


if (explode('/', $request) > 4) {

}


?>
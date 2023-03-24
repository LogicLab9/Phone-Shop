<?php
include_once "Controller/ItemController.php";
require_once "Controller/BrandController.php";
require_once "Controller/SubCatogoryController.php";
require_once "Controller/AuthController.php";
require_once "Controller/StatusItemController.php";
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
                $output = ItemController::get($searchtext);
                break;
            case "POST":
                $output = ItemController::post(getItemFormData(), getImages());
                var_dump(getData());
                break;


        }
        break;
    case "brands":
        switch ($method) {
            case "GET":
                $output = BrandController::getAll();
                break;

        }
        break;
    case "subcategories":
        switch ($method) {
            case "GET":
                $output = SubCatogoryController::getAll();
                break;

        }
        break;
    case "statuses":
        switch ($method) {
            case "GET":
                $output = StatusItemController::getAll();
                break;

        }
        break;
    case "users":
        switch ($method) {
            case "POST":
                switch ($resource) {
                    case "login":
                        $output = AuthController::logIn(getData());
                        break;
                    case "signup":
                        $output = AuthController::signUp(getData());
                        break;
                }
                break;

        }
        break;
}
if ($output) {
    echo($output);
}
function getImages()
{
    if ($_FILES['image']) {
        return $_FILES['image'];

    } else {
        return null;
    }
}

function getItemFormData()
{
    if ($_POST['item']) {
        return json_decode($_POST['item']);

    } else {
        return null;
    }

}

function getData()
{
    $jsonFile = fopen('php://input', 'r');
    $jsonString = fread($jsonFile, 1024);
    return json_decode($jsonString);
}


?>



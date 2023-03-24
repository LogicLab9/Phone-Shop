<?php
require_once "Dao/AuthDao.php";
class AuthController
{

    public static function logIn($authData)
    {return json_encode(AuthDao::getUser($authData));
    }

    public static function signUp($userData)
    {
    }
}
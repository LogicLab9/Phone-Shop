<?php

class AuthDao
{
    public static function getUser($authData)
    {
        $qry = "select *from user where username ='$authData->username' and password='$authData->password'";
        $result = CommonDao::getResults($qry);
        if ($result->fetch_assoc() || !$result->fetch_assoc()) {
            return true;
        }
    }


}
<?php

$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$userName  = $DecodedData['userName'];
$originalPw  = $DecodedData['originalPw'];
$newPw  = $DecodedData['newPw'];



$findpwQ = "select * from userinfo where userName='$userName'";

$findpwR = mysqli_query($CN, $findpwQ);

$Row = mysqli_fetch_assoc($findpwR);
$userPassword = $Row["userPassword"];

if (strcmp($userPassword, $originalPw) == 0) {

    $updateQ = "UPDATE userinfo SET userPassword='$newPw' WHERE userName='$userName'";
    $updateR = mysqli_query($CN, $updateQ);
    if ($updateR) {

        $Message  = "Changed";
    } else {
        $Message = "Server Error updateR";
    }
} else {
    $Message  = "original password is incorrect";
}


echo json_encode($Message);

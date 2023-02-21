<?php

$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);


$userName = $DecodedData['userName'];

$userPassword = $DecodedData['userPassword'];

$IQ = "select * from userinfo where userName='$userName' and userPassword='$userPassword'";

$R = mysqli_query($CN, $IQ);

if ($R->num_rows == 0) {
    $Message = "Server Error++++";
} else {
    $Message  = "selected";
}

echo json_encode($Message);

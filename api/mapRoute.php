<?php

$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);



$userName = $DecodedData['userName'];




$findQ = "select * from map where userName='$userName'";


$findR = mysqli_query($CN, $findQ);


if ($findR->num_rows == 0) {

    $Message = "NO long lat ";
} else if ($findR->num_rows > 0) {

    $Row = mysqli_fetch_assoc($findR);
    $Message = "long lat get";

    $startLong = $Row["startLong"];
    $startLat = $Row["startLat"];
    $destLong = $Row["destLong"];
    $destLat = $Row["destLat"];
} else {
    $Message = "Server Error, have some bug";
}


$Response[] = array(
    "Message" => $Message,

    "startLong" => $startLong,
    "startLat" => $startLat,
    "destLong" => $destLong,
    "destLat" => $destLat,

);

echo json_encode($Response);

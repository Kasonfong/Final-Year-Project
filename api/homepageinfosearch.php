<?php
$CN = mysqli_connect("localhost", "root", "");

$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$findName = $DecodedData['findName'];

// $FindPreference = $_POST['FindPreference'];

// $SQ = "select * from test_preference where preferenceInsert =$FindPreference";

$findpref = "select * from preference where userName='$findName'";

$findprefTable = mysqli_query($CN, $findpref);


$finddata = "select * from datainsert where userName='$findName'";

$finddataTable = mysqli_query($CN, $finddata);



$findtunnel = "select * from tunnelsuggestion where userName='$findName'";

$findtunnelTable = mysqli_query($CN, $findtunnel);



if ($findprefTable->num_rows == 0) {

    $Message  = "not ok";

    $preferenceInsert = "";
} else {
    $Message = "ok";
    $Row = mysqli_fetch_assoc($findprefTable);
    $preferenceInsert = $Row["preferenceInsert"];
}



if ($finddataTable->num_rows == 0) {

    $Message2nd  = "not ok";

    $startSubmit = "99";
    $endSubmit = "99";

    $daySubmit = "";
    $dateSubmit = "";
    $monthSubmit = "";
    $yearSubmit = "";

    $hourSubmit = "";
    $minutesSubmit = "";
} else {


    $Message2nd = "ok";
    $Row = mysqli_fetch_assoc($finddataTable);


    $startSubmit = $Row["startSubmit"];
    $endSubmit = $Row['endSubmit'];

    $daySubmit = $Row['daySubmit'];
    $dateSubmit = $Row['dateSubmit'];
    $monthSubmit = $Row['monthSubmit'];
    $yearSubmit = $Row['yearSubmit'];

    $hourSubmit = $Row['hourSubmit'];
    $minutesSubmit = $Row['minutesSubmit'];
}


if ($findtunnelTable->num_rows == 0) {

    $Message3rd  = "not ok";

    $tunnel = "nil";
} else {
    $Message3rd = "ok";
    $Row = mysqli_fetch_assoc($findtunnelTable);

    $tunnel = $Row['tunnel'];
}





$Response[] = array(
    "Message" => $Message,
    "preferenceInsert" => $preferenceInsert,


    "Message2nd" => $Message2nd,

    "startSubmit" => $startSubmit,
    "endSubmit" => $endSubmit,

    "daySubmit" => $daySubmit,
    "dateSubmit" => $dateSubmit,
    "monthSubmit" => $monthSubmit,
    "yearSubmit" => $yearSubmit,
    "hourSubmit" => $hourSubmit,
    "minutesSubmit" => $minutesSubmit,

    "Message3rd" =>   $Message3rd,
    "tunnel" => $tunnel,



);



// $Response[]=array("Message" => $Message);

echo json_encode($Response);

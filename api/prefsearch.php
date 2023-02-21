<?php
$CN = mysqli_connect("localhost", "root", "");

$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$findName = $DecodedData['findName'];

// $FindPreference = $_POST['FindPreference'];

// $SQ = "select * from test_preference where preferenceInsert =$FindPreference";

$findpref = "select * from test_preference where userName='$findName'";

$findprefTable = mysqli_query($CN, $findpref);



if ($findprefTable->num_rows == 0) {

    $Message  = "not ok";

    $preferenceInsert = "";
} else {
    $Message = "ok";
    $Row = mysqli_fetch_assoc($findprefTable);
    $preferenceInsert = $Row["preferenceInsert"];
}

$Response[] = array(
    "Message" => $Message,
    "preferenceInsert" => $preferenceInsert,



);



// $Response[]=array("Message" => $Message);

echo json_encode($Response);

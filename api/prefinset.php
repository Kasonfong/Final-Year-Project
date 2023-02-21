<?php

$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "iefyp");  // cst -> new db name 

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);


// replace wif new variable     
$userName = $DecodedData['userName'];
$preferenceInsert = $DecodedData['preferenceInsert'];


# cst -> database, studnetmaster-> table name 


$selectQ = "select * from preference where userName='$userName'";


$selectR = mysqli_query($CN, $selectQ);


if ($selectR->num_rows == 0) {
    //insert
    $insertQ = "insert into preference(userName,preferenceInsert) values('$userName',$preferenceInsert)";
    $insertR = mysqli_query($CN, $insertQ);

    if ($insertR) {

        $Message  = "preference inserted";
    } else {
        $Message = "Server Error insertQ";
    }
} else if ($selectR->num_rows > 0) {
    //update
    // $Message  ="trys to update";
    $updateQ = "UPDATE preference SET preferenceInsert=$preferenceInsert WHERE userName='$userName'";
    $updateR = mysqli_query($CN, $updateQ);


    if ($updateR) {

        $Message  = "preference updated";
    } else {
        $Message = "Server Error updateR";
    }
} else {
    $Message = "Server Error, have some bug";
}


$Response[] = array("Message" => $Message);

echo json_encode($Response);

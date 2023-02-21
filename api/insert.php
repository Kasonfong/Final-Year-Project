<?php

    $CN = mysqli_connect("localhost","root","");
    $DB = mysqli_select_db($CN,"cst"); 

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true );


    
    $RollNo = $DecodedData['RollNo'];
    $StudentName=$DecodedData['StudentName'];
    $Course=$DecodedData['Course'];

    # cst -> database, studnetmaster-> table name 

    $IQ = "insert into studentmaster(RollNo,StudentName,Course) values($RollNo, '$StudentName','$Course')";


    $R = mysqli_query($CN,$IQ);

    if($R){

        $Message  ="Student has been registered";
    }
    else{

        $Message = "Server Error";
    }

    $Response[]=array("Message" => $Message);

    echo json_encode($Response);



?>
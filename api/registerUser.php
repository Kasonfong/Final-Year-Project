<?php

    $CN = mysqli_connect("localhost","root","");
    $DB = mysqli_select_db($CN,"iefyp");  // cst -> new db name 

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true );


    // replace wif new variable     

    $userName = $DecodedData['userName'];
    $userPassword = $DecodedData['userPassword'];


    # cst -> database, studnetmaster-> table name 

    $IQ = "insert into userinfo(userName,userPassword) values('$userName','$userPassword')";

    # '' for varchar, but numbers, i.e. int dun need ''

    $R = mysqli_query($CN,$IQ);

    if($R){

        $Message  ="Registered";
    }
    else{

        $Message = "Server Error , Make changes in register php ";
    }


    echo json_encode($Message);

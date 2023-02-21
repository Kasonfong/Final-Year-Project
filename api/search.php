<?php
    $CN = mysqli_connect("localhost","root","");

    $DB = mysqli_select_db($CN,"iefyp");

    $FindName = $_POST['FindName'];

   // $FindPreference = $_POST['FindPreference'];

   // $SQ = "select * from test_preference where preferenceInsert =$FindPreference";

    $SQ = "select * from test_preference where UserName = '$FindName'";
    
    $Table = mysqli_query($CN,$SQ);

    $numofrows = mysqli_num_rows($Table);

    if ( $numofrows > 0 ){

        $Row = mysqli_fetch_assoc($Table);

        $UserName = $Row['UserName'];

        $preferenceInsert = $Row["preferenceInsert"];

    }
    else{

        $UserName = "";

        $preferenceInsert = "";
    }

    $Responce[] = array("UserName"=>$UserName,"preferenceInsert"=>$preferenceInsert);
    echo json_encode($Responce);





?>

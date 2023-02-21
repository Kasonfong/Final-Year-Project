<?php

$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "iefyp");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);



$userName = $DecodedData['userName'];
$startLong = $DecodedData['startLong'];
$startLat = $DecodedData['startLat'];
$destLong = $DecodedData['destLong'];
$destLat = $DecodedData['destLat'];

$startSubmit = $DecodedData['startindex'];
$endSubmit = $DecodedData['destindex'];


$daySubmit = $DecodedData['daySubmit'];
$dateSubmit = $DecodedData['dateSubmit'];
$monthSubmit = $DecodedData['monthSubmit'];
$yearSubmit = $DecodedData['yearSubmit'];

$hourSubmit = $DecodedData['hourSubmit'];


if ($hourSubmit > 24) {

    //success
    $hourSubmit -= 24;
    $dateSubmit += 1;
}

$minutesSubmit = $DecodedData['minutesSubmit'];

$hourCal = $hourSubmit;


if ($minutesSubmit >= 45) {

    $hourCal = $hourSubmit + 1;
}



// array for EHC HCT WHC 's no of car 
$EHC = [255, 58, 0, 0, 0, 11, 603, 2170, 3261, 2785, 2147, 1857, 1775, 1648, 1938, 2240, 2217, 2426, 3366, 2576, 1183, 975, 1009, 661, 255];
$HCT = [200, 45, 0, 0, 0, 9, 474, 1706, 2563, 2189, 1688, 1459, 1396, 1295, 1523, 1761, 1742, 1907, 2646, 2025, 930, 766, 793, 520, 200];
$WHC = [249, 56, 0, 0, 0, 11, 588, 2117, 3182, 2717, 2094, 1811, 1732, 1608, 1891, 2185, 2162, 2366, 3284, 2513, 1155, 951, 985, 645, 249];


// array for distance from EHC HCT WHC

$disEHC = [11.7, 7.8, 2, 8.6, 10.4, 19.2, 32.9, 6.9, 14, 24.4, 11.5, 36.9, 36, 38.1, 9.9, 2.1, 12.1, 6];
$disHCT =  [5.3, 7, 8.2, 6.5, 12.2, 11, 32.2, 13.8, 11.9, 23.6, 13.3, 30.2, 28, 30.5, 6, 5.9, 7.9, 1.6];
$disWHC = [4, 10, 10.6, 13.2, 1.8, 8.5, 38, 16.5, 13.2, 25.1, 21.5, 28, 26, 28.9, 2.6, 10.5, 13.1, 5.3];

//insert to map

$selectQ = "select * from map where userName='$userName'";


$selectR = mysqli_query($CN, $selectQ);


if ($selectR->num_rows == 0) {
    //insert
    $insertQ = "insert into map(userName,startLong,startLat,destLong,destLat,startSubmit,endSubmit) values('$userName',$startLong,$startLat,$destLong,$destLat,$startSubmit,$endSubmit)";
    $insertR = mysqli_query($CN, $insertQ);

    if ($insertR) {

        $Message  = "map location inserted";
    } else {
        $Message = "Server Error insertQ";
    }
} else if ($selectR->num_rows > 0) {
    //update
    // $Message  ="trys to update";
    $updateQ = "UPDATE map SET startLong=$startLong,startLat=$startLat,destLong=$destLong,destLat=$destLat, startSubmit=$startSubmit, endSubmit=$endSubmit   WHERE userName='$userName'";
    $updateR = mysqli_query($CN, $updateQ);


    if ($updateR) {

        $Message  = "map location updated";
    } else {
        $Message = "Server Error updateR";
    }
} else {
    $Message = "Server Error, have some bug";
}


$findpref = "select * from preference where userName='$userName'";

$findprefTable = mysqli_query($CN, $findpref);


if ($findprefTable->num_rows == 0) {

    $Message  = "No preference";

    $preferenceInsert = "";
} else {

    $Row = mysqli_fetch_assoc($findprefTable);
    $preferenceInsert = $Row["preferenceInsert"];
}

if ($preferenceInsert <= 3) {

    $HCT[$hourCal] -= 1; // use test is ok 
} else {
    $EHC[$hourCal] -= 1;
}




// array for time value 
$timevalue = array(0, 13, 28, 42, 57);

$totdisEHC = $disEHC[$startSubmit] + $disEHC[$endSubmit] + 2.29;

$totdisHCT = $disHCT[$startSubmit] + $disHCT[$endSubmit] + 1.86;

$totdisWHC = $disWHC[$startSubmit] + $disWHC[$endSubmit] + 1.975;

$carRemainEHC = $EHC[$hourCal - 1] - 2600;

if ($carRemainEHC < 0) {
    $carRemainEHC = 0;
}

$carRemainHCT = $HCT[$hourCal - 1] - 2600;

if ($carRemainHCT < 0) {
    $carRemainHCT = 0;
}


$carRemainWHC = $WHC[$hourCal - 1] - 4200;

if ($carRemainWHC < 0) {
    $carRemainWHC = 0;
}


$delayEHC = ($carRemainEHC + $EHC[$hourCal] / 2) / 60;

if ($delayEHC < 0) {
    $delayEHC = 0;
}



$delayHCT = ($carRemainHCT + $HCT[$hourCal] / 2) / 60;

if ($delayHCT < 0) {
    $delayHCT = 0;
}

$delayWHC = ($carRemainWHC + $WHC[$hourCal] / 2) / 60;

if ($delayHCT < 0) {
    $delayWHC = 0;
}


$timeEHC = $totdisEHC / 50 * 60 + $delayEHC;

$timeHCT = $totdisHCT / 50 * 60 + $delayHCT;

$timeWHC = $totdisWHC / 50 * 60 + $delayWHC;

$moneyEHC = $totdisEHC * 1 + 25;

$moneyHCT = $totdisHCT * 1 + 20;

$moneyWHC = $totdisWHC * 1 + 75;





$virmoneyEHC = $timeEHC / 60 * $timevalue[(int)$preferenceInsert - 1] * 1.2;


$virmoneyHCT = $timeHCT / 60 * $timevalue[(int)$preferenceInsert - 1] * 1.4;



$virmoneyWHC = $timeWHC / 60 * $timevalue[(int)$preferenceInsert - 1] * 0.4;

$totalmoneyEHC = $moneyEHC + $virmoneyEHC;

$totalmoneyHCT = $moneyHCT + $virmoneyHCT;

$totalmoneyWHC = $moneyWHC + $virmoneyWHC;


if ($totalmoneyEHC < $totalmoneyHCT && $totalmoneyEHC < $totalmoneyWHC) {

    $tunnel = "Eastern Harbour Crossing";
    //other info
    $totdis = $totdisEHC;
    $delay = $delayEHC;
    $time = $timeEHC;
    $money = $moneyEHC;
    $virmoney = $virmoneyEHC;
    $totalmoney = $totalmoneyEHC;
} else if ($totalmoneyHCT < $totalmoneyEHC && $totalmoneyHCT < $totalmoneyWHC) {

    $tunnel = "Cross Harbour Tunnel ";
    //other info
    $totdis = $totdisHCT;
    $delay = $delayHCT;
    $time = $timeHCT;
    $money = $moneyHCT;
    $virmoney = $virmoneyHCT;
    $totalmoney = $totalmoneyHCT;
} else if ($totalmoneyWHC < $totalmoneyEHC && $totalmoneyWHC < $totalmoneyHCT) {

    $tunnel = "Western Harbour Crossing";
    //other info
    $totdis = $totdisWHC;
    $delay = $delayWHC;
    $time = $timeWHC;
    $money = $moneyWHC;
    $virmoney = $virmoneyWHC;
    $totalmoney = $totalmoneyWHC;
}


// start to insert



$selectQ = "select * from datainsert where userName='$userName'";
$selectR = mysqli_query($CN, $selectQ);


if ($selectR->num_rows == 0) {
    //insert
    $insertQ = "insert into datainsert(userName,startSubmit,endSubmit,daySubmit,dateSubmit,monthSubmit,yearSubmit,hourSubmit,minutesSubmit) values('$userName',$startSubmit, $endSubmit, $daySubmit, $dateSubmit, $monthSubmit,$yearSubmit,$hourSubmit,$minutesSubmit)";


    $insertR = mysqli_query($CN, $insertQ);

    if ($insertR) {

        $MessageD  = "Data inserted";
    } else {

        $MessageD = "Server Error insertR";
    }
} else if ($selectR->num_rows > 0) {
    //update
    $MessageD  = "trys to update";

    $updateQ = "UPDATE datainsert SET startSubmit=$startSubmit,endSubmit=$endSubmit,daySubmit=$daySubmit,dateSubmit=$dateSubmit,monthSubmit=$monthSubmit,yearSubmit=$yearSubmit,hourSubmit=$hourSubmit,minutesSubmit=$minutesSubmit WHERE userName='$userName'";


    $updateR = mysqli_query($CN, $updateQ);

    if ($updateR) {

        $MessageD  = "Data updated";
    } else {

        $MessageD = "Server Error updateR";
    }
} else {
    $MessageD = "Server Error, have some bug";
}



// TUNNEL



$tunnelSQ = "select * from tunnelsuggestion where userName='$userName'";
$tunnelSR = mysqli_query($CN, $tunnelSQ);


if ($tunnelSR->num_rows == 0) {
    //insert
    $tunnelIQ = "insert into tunnelsuggestion(userName,tunnel,total_distance,delay_time,total_time,	total_real_money,total_virtual_money,total_money) values('$userName','$tunnel',$totdis,$delay,$time,$money,$virmoney,$totalmoney)";
    //other info

    $tunnelIR = mysqli_query($CN, $tunnelIQ);

    if ($tunnelIR) {

        $MessageT  = "tunnel inserted";
    } else {

        $MessageT = "Server Error tunnelIR";
    }
} else if ($tunnelSR->num_rows > 0) {
    //update....
    $MessageT  = "trys to update";

    $tunnelUQ = "UPDATE tunnelsuggestion SET tunnel='$tunnel',total_distance=$totdis,delay_time=$delay,total_time=$time,total_real_money=$money,total_virtual_money=$virmoney,total_money=$totalmoney WHERE userName='$userName'";



    $tunnelUR = mysqli_query($CN, $tunnelUQ);

    if ($tunnelUR) {

        $MessageT  = "tunnel updated";
    } else {

        $MessageT = "Server Error tunnelUR";
    }
} else {
    $MessageT = "Server Error, have some bug tunnel";
}



$Response[] = array("Message" => $Message);

echo json_encode($Response);

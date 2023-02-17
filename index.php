<?php
  //Constants required for application to work
  $server = 'svua5web01';
  $username = 'idm_user';
  $password = 'Idm_admiN';
  $db = '5s_results';
  //End variable declaration
  
    if (isset($_SERVER['HTTP_ORIGIN'])) { 
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
  }
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }

  $respondArray = array();
  $conn = @mysqli_connect($server, $username, $password, $db);

  // Check connection
  if (!$conn) {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $respondArray[0] = $protocol . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . "/config.php ";
    $respondArray[1] = mysqli_connect_error();
    echo json_encode($respondArray);
    exit();
  }

  mysqli_query($conn, "SET NAMES 'utf-8'");
  mysqli_query($conn, "SET collation_connection = 'utf8_general_ci'");

  // Check if required table exists in database and create if not exist
  $sql = "SHOW TABLES 'machine_audit_store'";
  if (!$result = mysqli_query($conn, $sql)) {
    $sql = "CREATE TABLE machine_audit_store (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      machine_name VARCHAR(30) NOT NULL,
      machine_status_overall VARCHAR(30) NOT NULL,
      machine_status VARCHAR(255) NOT NULL,
      imgs_src VARCHAR(255) NOT NULL,
      color_codes VARCHAR(255) NOT NULL,
      insert_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $query = mysqli_query($conn, $sql);
  }

  if(isset($_REQUEST['senddata'])) {
    $rows = json_decode($_REQUEST['senddata']);
    $sql = "INSERT INTO `machine_audit_store` (`machine_name`, `machine_status_overall`, `machine_status`, `imgs_src`, `color_codes`)
      VALUES ('$rows[0]', '$rows[1]', '$rows[2]', '$rows[3]', '$rows[4]')";
    $query = mysqli_query($conn, $sql);

    if($query) {
      echo json_encode('Success');
    }
  }

  if(isset($_REQUEST['getlateststatusdata'])) {
    $rows = json_decode($_REQUEST['getlateststatusdata']);
    //$sql = "SELECT * FROM `machine_audit_store`
      //WHERE `id` IN (SELECT MAX(`id`) FROM `machine_audit_store` GROUP BY `machine_name`)";
	$sql = "SELECT * FROM `machine_audit_store`
      WHERE `id` IN (SELECT MAX(`id`) FROM `machine_audit_store` GROUP BY `machine_name`) ORDER BY `machine_name`";
    
    $query = mysqli_query($conn, $sql);
    $json_array = array();

    while($row = mysqli_fetch_assoc($query)) {
      $json_array[] = $row;
    }

    if($query) {
      echo json_encode($json_array);
    }
  }

  if(isset($_REQUEST['getstatusreport'])) {
    $rows = json_decode($_REQUEST['getstatusreport']);
    // Get all distinct values to understand how much groups should be created
    $distinct_names = array();
	//$sql = "SELECT DISTINCT `machine_name` FROM `machine_audit_store` WHERE CAST(`insert_date` AS DATE) BETWEEN '$rows[0]' AND '$rows[1]'";
    $sql = "SELECT DISTINCT `machine_name` FROM `machine_audit_store` WHERE CAST(`insert_date` AS DATE) BETWEEN '$rows[0]' AND '$rows[1]' ORDER BY `machine_name`";
    $query = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($query)) {
      $distinct_names[] = $row['machine_name'];
    }

    // Based on machine status array define which section not OK and put into array img path
    function GetImagesOfNOK($stringStatus, $imgArray) {
      $arrayStatus = explode(",", $stringStatus);
      $arrayImages = explode(",", $imgArray);
      $returnResults = array();
      foreach ($arrayStatus as $key => $value) {
        if ($value === "NOK") {
          $returnResults[] = $arrayImages[$key];
        }
      }
      return $returnResults;
    }

    // Define overall machine status
    function GetMachineStatusOverall($stringStatus) {
      $arrayStatus = explode(",", $stringStatus);
      $returnValue = "OK";
      foreach ($arrayStatus as $value) {
        if ($value === "NOK") {
          $returnValue = 'NOK';
        }
      }
      return $returnValue;
    }
    
    // Geat all portion of data from period which user required
    $dataSnapshot = array();
    $sql = "SELECT * FROM `machine_audit_store` WHERE CAST(`insert_date` AS DATE) BETWEEN '$rows[0]' AND '$rows[1]'";
    $query = mysqli_query($conn, $sql);
    $index = 0;
    while($row = mysqli_fetch_assoc($query)) {
      $dataSnapshot[$index]['machine_name'] = $row['machine_name'];
      $dataSnapshot[$index]['insert_date'] = $row['insert_date'];
      $dataSnapshot[$index]['machine_status'] = GetMachineStatusOverall($row['machine_status']);
      $dataSnapshot[$index]['imgs_src'] = GetImagesOfNOK($row['machine_status'], $row['imgs_src']);
      $index++;
    }

    $json_array = array();
    
    // Grouping all the data, when unique machine is the key and all data inside that key
    foreach ($distinct_names as $value) {
      foreach ($dataSnapshot as $value2) {
        if ($value === $value2['machine_name']) {
          $json_array[$value]['insert_date'][] = $value2['insert_date'];
          $json_array[$value]['machine_status'][] = $value2['machine_status'];
          $json_array[$value]['imgs_src'][] = $value2['imgs_src'];
        }
      }
      $json_array[$value]['machine_status_overall'][] = GetMachineStatusOverall(implode(",", $json_array[$value]['machine_status']));
      //$stringifyMachineStatus = implode(",", $json_array[$value]['machine_status']);
      //print_r($stringifyMachineStatus);
    }

    if($query) {
      echo json_encode($json_array);
    }
  }
<?php
 
// database connection code
 
// $con = mysqli_connect('localhost', 'usuariodelabasededatos', 'passworddelabasededatos','basededatos');
 
$con = mysqli_connect('localhost', 'root','','db_contact');
 
// get the post records
 
$txtName = $_POST['txtName'];
 
$txtEmail = $_POST['txtEmail'];
 
$txtMessage = $_POST['txtMessage'];
 
// database insert SQL code
 
$sql = "INSERT INTO tbl_contact (id, fldName, fldEmail, fldMessage) VALUES ('0', '$txtName', '$txtEmail', '$txtMessage')";
 
// insert in database
 
$rs = mysqli_query($con, $sql);
 
if($rs)
 
{
 
echo "Contact Records Inserted";
 
}
 
?>
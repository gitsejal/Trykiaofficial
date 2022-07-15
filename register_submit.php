<?php
 $db_hostname="127.0.0.1";
 $db_username="root";
 $db_password="";
 $db_name="test";

 $conn=mysqli_connect($db_hostname,$db_username,$db_password,$db_name);
 if(!$conn){
    echo "Connection Failed" . mysqli_connect_error();
    exit;
 }

 $name = $_POST['name'];
 $email = $_POST['email'];
 $password = $_POST['password'];

 echo $name . "<br/>";
 echo $email . "<br/>";
 echo $password . "<br/>";

 $sql= "INSERT INTO registrations(name,email,password) Values ('$name','$email','$password')";
 $result= mysqli_query($conn,$sql);
 if(!result)
 {
    echo "Error" . mysqli_error($conn);
    exit;
 }
echo "Registration Successfull";
mysqli_close($conn);
?>
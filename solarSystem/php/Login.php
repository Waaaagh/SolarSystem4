<?php
    
    $user = $_POST['username'];
    $password = $_POST['password'];
    $sex = $_POST['gender'];
    $realFirst = $_POST['first_name'];
    $realLast = $_POST['last_name'];
    $email = $_POST['email'];

    echo "Username: $user <br />";
    echo "Password: $password <br />";
    echo "Gender: $sex <br />";
    echo "Real First Name: $realFirst <br />";
    echo "Real Last Name: $realLast <br />";
    echo "Email: $email <br />";

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        
    </body>
</html>

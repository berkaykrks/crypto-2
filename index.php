<?php

    $baglan = mysqli_connect("localhost","root","","crypto");

    if(!$baglan){
        die("connection failed : ".mysqli_connect_error());
    }
    else{
        echo "baglantı oldu";
    }
?>
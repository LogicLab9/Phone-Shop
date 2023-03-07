<?php

   $conn = mysqli_connect("localhost","root","1234","phone_sohop");
   if (!$conn) {
        echo "Connection unsuccess";

    }
    
    $sql = "SELECT * FROM item"; 
    $result = mysqli_query($conn , $sql);
    while ($employee = mysqli_fetch_assoc($result)) {
        echo("<tr>");


        echo("<td>");
        echo($employee["id"]);
        echo("</td>");

        
        echo("<td>");
        echo($employee["name"]);
        echo("</td>");

        
        echo("<td>");
        echo($employee["price"]);
        echo("</td>");

        
        echo("<td>");
        echo($employee["ItemCode"]);
        echo("</td>");

        
        echo("<td>");
        echo($employee["StatusItem_id"]);
        echo("</td>");

        echo("<td>");
        echo($employee["SubCategory_id"]);
        echo("</td>");

        echo("<td>");
        echo($employee["brand_id"]);
        echo("</td>");
      

    }

?>
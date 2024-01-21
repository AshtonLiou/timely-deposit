<?php

        $dsn="mysql:host=localhost;charset=utf8;dbname=db54";
        $pdo=new PDO($dsn,'root','');
        $sql="INSERT INTO `tickets` (`firstname`,`lastname`,`phone`,`password`)
            VALUES ('{$_POST['firstname']}','{$_POST['lastname']}','{$_POST['phone']}','{$_POST['password']}')";
        $pdo->exec($sql);
        echo "<script>alert('送出成功，點擊確定返回首頁(Home)');location.href = 'home.html';</script>"

?>
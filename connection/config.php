<?php

	 $engi = "mysql";
	 $host = "localhost";
	 $dbse = "rms";
	 $user = "root";
	 $pass = "";
   
	 $koneksi = new PDO($engi.':dbname='.$dbse.";host=".$host, $user,$pass);

	 // if($koneksi) {
	 // 	echo "Success";
	 // }
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="../assets/icon.png">
	 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="../style/features.css">
	<style type="text/css">
		ul li a {
			color: white;
		}
		ul li a:hover {
			color: gold;
		}

		.gold {
			color: gold;
		}
	</style>
	<title>BON APPETIT</title>
</head>
<body>
	<?php include "features-header.php" ?>
	<!-- <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href=#>All Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=#>Breakfast</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=#>Lunch</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=#>Dinner</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=#>Drink</a>
                </li>
            </ul>
            </div>
        </div>
    </nav> -->
         <div class="container">
	 <div class="row mt-4 justify-content-center">
            <h1 style="display: none">All Menu</h1>
        </div>
        <ul style="padding-top: 20px;">
                <li class="nav-item" style="display: inline-block;">
                    <a class="nav-link gold"  href=#>All Menu</a>
                </li>
                <li class="nav-item" style="display: inline-block;">
                    <a class="nav-link" href=#>Breakfast</a>
                </li>
                <li class="nav-item" style="display: inline-block;">
                    <a class="nav-link" href=#>Lunch</a>
                </li>
                <li class="nav-item" style="display: inline-block;">
                    <a class="nav-link" href=#>Dinner</a>
                </li>
                <li class="nav-item" style="display: inline-block;">
                    <a class="nav-link" href=#>Drink</a>
                </li>
              <ul style="float: right;">
                <h5 style="display: inline-block; margin-right: 10px;margin-top:5px; color: white;">Sort by : </h5>
       		 <div class="dropdown" style="display: inline-block;">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select to sort the content
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item disabled" href="#">Select to sort the content</a>
              <a class="dropdown-item" href="#">Nama A-Z</a>
              <a class="dropdown-item" href="#">Nama Z-A</a>
              <a class="dropdown-item" href="#">Harga Termurah</a>
              <a class="dropdown-item" href="#">Harga Termahal</a>
            </div>
          </div>
          </ul>
            </ul>
         <!--  <div class="right">
        	<p><a href="___">Sign In</a></p>
   		  </div> -->
	<div class="row mt-4" id="menu-list">
        </div>
  </div>
  <footer class="footer">
      <div class="text-center">Copyright &copy; 2020
        <a class="footertext" href="https://instagram.com/adam_traceurs" target="_blank"> Adam Roxann Irsyad</a>
      </div>
    </footer>
</div>
</div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../style/js.js"></script>
</body>
</html>
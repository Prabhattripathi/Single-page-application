# Single-page-application

<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<title>Angular js</title>
		<meta http-equiv="X-UA-Compatible" content="IE-Edge">
		<meta charset = "UTF-8">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src= "https://code.angularjs.org/1.4.1/angular.min.js"></script>
		<script src= "https://code.angularjs.org/1.4.1/angular-route.min.js"></script>
		<script src="/home/user/Downloads/Prabhat/w3scools_js/Angular Tutorial/ang.js"></script>
	</head>
	<body>
		<header>
			<nav class="navbar navbar:default">
				<div class="container">
					<div class="navbar header">
						<a class="navbar-brand" href="/">Angular JS</a>
					</div>
					
					<ul class="nav navbar-nav navbar-left">
						<li><a href="#/home"><i class="fa fa-home"></i>Home</a></li>
						<li><a href="#/developer"><i></i>Developer</a></li>
						<li><a href="#/products"><i class="fa fa-home"></i>Products</a></li>						
					</ul>
					<ul class="nav navbar-nav navbar-right">	
						<li><a href="#/about"><i></i>About</a></li>
					</ul>
				</div>
			</nav>
		</header>
		<hr />	
		<div class="container">
			<div ng-view></div>
		</div>
	</body>
</html>

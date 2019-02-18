<!DOCTYPE html>
<html>
	<head>
		<title>Snake</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	
	<body onkeydown="control(event);">



		<div class="container title">
 			<div class="page-header">
    			<h1>Billy el devora Fresas</h1>      
  			</div>
  				<strong>
  					<p>Un gusanito café con antojo de unas suculentas Fresas rojas.</p>
  				</strong>
		</div>

		<div class="container p-billy">
			<div class="row">
				<div class="col-md-12">
					<h3>¿Quien es Billy?</h3>
						<p>Billy es un un pequeño gusanito café que vive en un huerto de Fresas, Billy es adicto a las Fresas rojas y jugosas.</p>
						<p>
							<strong>
								Ayuda a Billy a saciar su antojo de Fresas.
							</strong>
						</p>
				</div>
			</div>
			<br>
					<!--//JS-GAME//-->
				<script type="text/javascript" src="js/snake.js"></script>
	
			<div class="row">
				<div class="col-md-12">
					<center>
						<canvas id="canvas" width="600" height="600"></canvas>
					</center>
				</div>
			</div>
			<br>
		</div>

		<!-- //JS-FRAMEWORK// -->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
	</body>
</html>
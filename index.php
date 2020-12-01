<!DOCTYPE html>

<head>
	<title>Roguelike</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- Popper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- Custom styles for this template -->
	<link rel="stylesheet" href="css/styles.css">

	<script src="js/phaser.min.js"></script>
	<script src="js/actor.js"></script>
	<script src="js/map.js"></script>
	<script src="js/asciidisplay.js"></script>
	<script src="js/main.js"></script>


</head>
<?php require_once('./Model/functions.php'); ?>

<body>

	<?php get_header(); ?>
	<div class="container-fluid">
		<div class="row" id="central">
			<div class="col-sm">
				Bloque con la información del jugador
			</div>
			<div class="col-sm">
				<div id='xd'></div>
			</div>
			<div class="col-sm">
				Bloque con la información del mapa y los enemigos
			</div>
		</div>
	</div>
</body>

</html>
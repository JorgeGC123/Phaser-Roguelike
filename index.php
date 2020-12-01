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
	<!-- Load color-thief from CDN -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>

</head>
<?php require_once('./Model/functions.php'); ?>

<body>

	<?php //get_header(); 
	?>
	<header>

		<img id="image" src="img/header4.jpg" alt="Responsive image">
		<h1 class="nombreZona">Bienvenido al <?php echo 'bosque' ?> </h1>


	</header>
	<div id="mainback" class="container-fluid">
		<div class="row" id="central">
			<div class="col-sm">
				<h1>JUGADOR</h1>
				<p id="hp"></p>
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

<script>
	const colorThief = new ColorThief();
	const img = document.querySelector('#image');;
	let color = [];
	// Make sure image is finished loading
	if (img.complete) {
		color = colorThief.getColor(img);
		console.log(color);
	} else {
		img.addEventListener('load', function() {
			color =	colorThief.getColor(img);
			console.log(color);
			let r = color[0]
			let g = color[1]
			let b = color[2]
			document.getElementById("mainback").style.backgroundColor = 'rgba('+r+','+g+','+b+',0.9)';
		});
	}
	
</script>

</html>
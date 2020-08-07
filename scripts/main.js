
var version = "v5.3.2 Beta";
var version_dev = false;
var fpsrate;


function setup() {
	setInterval(update_100, 100);
	frameRate(60);
	createCanvas(envi.map_width, (envi.enemyzone_size + envi.safezone_size));
	
	loadScore();
	
	buttons_create();
	
	//game.print_info_in_console();
	player = new Player();
	game.start();
}

function draw() {
	background(0);
	if(scene.currentscene == 0){
		scene.draw_mainMenu();
	}
	else if(scene.currentscene == 1){

		scene.draw_playing();
		
		player.move();
		player.detect_collision();
		player.display();
		
		if(envi.enemies_bouncing) enemies_bounce();
		for(var a = 0; a < enemies.length; a++){
			enemies[a].move();
			enemies[a].display();
		}
	}
	else if(scene.currentscene == 2){
		scene.draw_gameover();
	}
	else if(scene.currentscene == 3){
		scene.draw_options();
	}
	else if(scene.currentscene == 4){
		scene.draw_rules();
	}
	
	draw_buttons();
}

function keyPressed(){
	controls.enable();
	
	if(keyCode === ESCAPE){
		//if(scene.currentscene == 1 || scene.currentscene == 2 || scene.currentscene == 3 || scene.currentscene == 4){
			scene.set(0);
		//}
	}
	//return false;
}

function keyReleased(){
	controls.disable();
}

function mousePressed(){
	is_button_clicked();
}

function update_100(){
	fpsrate = round(frameRate());
}























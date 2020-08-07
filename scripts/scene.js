
/*
*	SCENES:
*		0:		main menu
*		1:		playing
*		2:		gameover
*		3:		console and game options	
*		4:		game rules
*/


var scene = {
	currentscene: 0,
	
	set: function(a){
		this.currentscene = a;
		//buttons.splice(0, buttons.length);
	},
	
	draw_mainMenu: function(){
		//	BEST AND LAST SCORE INFO
		noStroke();
		fill(150);
		textAlign(LEFT);
		textSize(10);
		text("Najlepszy wynik\n" + game.best_score + "\n\nOstatni wynik\n" + game.last_score, 2, 15);
		
		//	INFO ABOUT CONSOLE
		noStroke();
		fill(150);
		textAlign(RIGHT);
		textSize(10);
		text(version, width-2, 15);
		
		//	GAME NAME IN CENTER
		noStroke();
		fill(255);
		textAlign(CENTER);
		textSize(80);
		textStyle(BOLD);
		stroke(random(100, 255), random(100, 255), random(100, 255));
		strokeWeight(3);
		text("PASS THROUGH!", width/2, height/3);
	},
	
	draw_playing: function(){
		//	FINISH LINE
		noStroke();
		fill(0, 255, 0);
		rect(-1, -1, width, 5);
		
		//	SAFEZONE
		noStroke();
		fill(0, 0, 255);
		rect(0, height - envi.safezone_size, width, envi.safezone_size);
		
		//	SAFEZONE UPPER BORDER LINE
		noStroke();
		fill(255);
		rect(0, height - envi.safezone_size, width, 2);
		
		//	BIG LEVEL NUMBER IN MIDDLE
		noStroke();
		//stroke(random(100, 255), random(100, 255), random(100, 255));
		fill(255);
		textAlign(CENTER);
		textSize(200);
		textStyle(BOLD);
		text(game.level, width/2, height/2);
		
		//	POINTS UNDER LEVEL NUMBER
		noStroke();
		fill(120);
		textAlign(CENTER);
		textSize(24);
		textStyle(BOLD);
		text(game.points, width/2, height/2 + 50);
		
		//	SAFEZONE TEXT
		noStroke();
		fill(frameCount*5%255);
		textAlign(CENTER);
		textSize(20);
		text("BEZPIECZNA STREFA", width/2, height - 20);
		
		//	BEST AND LAST SCORE INFO
		noStroke();
		fill(150);
		textAlign(LEFT);
		textSize(10);
		text("Najlepszy wynik\n" + game.best_score + "\n\nOstatni wynik\n" + game.last_score, 2, 15);
		
		//	INFO ABOUT VERSION AND EXIT
		noStroke();
		fill(150);
		textAlign(RIGHT);
		textSize(10);
		text(version + "\n" + fpsrate + "FPS\n\nESC\nMenu główne", width-2, 15);
	},
	
	draw_gameover: function(){
		noStroke();
		fill(255, 0 ,0);
		textAlign(CENTER);
		textSize(80);
		textStyle(BOLD);
		text("GAME OVER", width/2, height/3);
		
		noStroke();
		fill(120);
		textAlign(CENTER);
		textSize(24);
		textStyle(BOLD);
		text("Wynik: " + game.last_score + "\nNajlepszy wynik: " + game.best_score, width/2, height/3 + 50);
	},
	
	draw_options: function(){
		//	INFO ABOUT VERSION AND EXIT
		noStroke();
		fill(150);
		textAlign(RIGHT);
		textSize(10);
		text(version + "\n\nESC\nMenu główne", width-2, 15);
		
		noStroke();
		fill(200);
		textAlign(LEFT);
		textSize(16);
		text("Obecne ustawienia gry: \n______________________\n\n" + 
			
			"envi.timescale\n" + envi.timescale + "\nMnoznik predkosci gry. @ [1, 2...]" + "\n\n" + 
			"envi.enemyzone_size\n" + envi.enemyzone_size + "\nWielkość pola z przeciwnikami. @ [570, 571...]" + "\n\n" + 
			"envi.bouncing\n" + envi.enemies_bouncing + "\nCzy przeciwnicy maja sie od siebie odbijac? @ [true/false]" + "\n\n" + 
			"game.enemies_on_start\n" + game.enemies_on_start + "\nIlosc przeciwnikow na start. @ [1, 2...]" + "\n\n" + 
			"game.enemies_on_start\n" + game.enemies_on_next_level + "\nIlosc przeciwnikow dodawanych z kolejnym poziomem. @ [0, 1, 2...]" + "\n\n\n\n" +
			
			"Poniższe ustawienia można edytować w konsoli (F12).",
		15, height/20);
	},
	
	draw_rules: function(){
		//	INFO ABOUT VERSION AND EXIT
		noStroke();
		fill(150);
		textAlign(RIGHT);
		textSize(10);
		text(version + "\n\nESC\nMenu główne", width-2, 15);
		
		noStroke();
		fill(200);
		textAlign(LEFT);
		textSize(16);
		text("Zasady gry: \n______________________\n\n" + 
			
			"Celem gracza jest dojście do zielonego pola na górze jak największą ilość razy.\n" + 
			"Dotknięcie przeciwnika (czerwona kropka) oznacza koniec gry.\n" + 
			"Z każdym kolejnym poziomem przeciwników jest coraz więcej.\n\n" + 
			
			"Ilość punktów zależy od: \n" + 
			"-> obecnego poziomu i ilości przeciwników na mapie\n" + 
			"-> łącznego promienia wszystkich przeciwników\n" + 
			"-> czasu z jakim przeszło się dany poziom (oprócz pierwszego)\n" + 
			"-> ustawień gry (wielkość mapy, szybkość gry, itp.)",
		15, height/20);
	}
};

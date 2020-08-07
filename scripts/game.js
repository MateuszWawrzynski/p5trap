
var game = {
	level: 1,
	best_score: 0,
	last_score: 0,
	enemies_on_start: 1,
	enemies_on_next_level: 1,
	points: 0,
	uptime: 0,
	
	start: function(){
		this.restart();
		for(var a = 0; a < this.enemies_on_start; a++)
			enemies.push(new Enemy());
		this.uptime = 0;
	},
	nextLevel: function(){
		player.posy = (height - player.radius);
		this.addPoints();
		var t = round(millis()-this.uptime);
		if(version_dev) console.log("[DEV] :: Level uptime: " + t);
		this.uptime = millis();
			
		background(0, 255, 0);
		for(var a = 0; a < this.enemies_on_next_level; a++)
			enemies.push(new Enemy());
		this.level++;
		
		if(is_cheating(t)){
			alert("Gra wykryła cheaty lub inne niedozwolone modyfikacje gry.\nNiestety w związku z tym nie można uznać Twojej gry za wiarygodną.\n\nTwoja gra zostaje anulowana, a dotychczasowy wynik przepada.");
			location.reload();
		}
	},
	addPoints: function(){
		var d = 0;
		for(var a = 0; a < enemies.length; a++) d += (enemies[a].size/2);
		
		this.points += floor(((enemies.length*game.level) + (game.level) + (envi.enemyzone_size*enemies.length) + (envi.enemies_bouncing*10) + d) * envi.timescale);
		if(this.uptime != 0){
			var c = round(1000 - ((millis()-this.uptime)/4));
			if(c > 0) this.points += c;
			//console.log(round((millis()-this.uptime)));
		}
	},
	lose: function(){
		this.last_score = this.points;
		if(this.points > this.best_score) this.best_score = this.points;
		
		setCookie('pkt_bestscore', this.best_score, 62);
		setCookie('pkt_lastscore', this.last_score, 62);
		
		background(255, 0, 0);
		scene.set(2);
		this.restart();
	},
	restart: function(){
		player.posx = width/2;
		player.posy = (height - player.radius);
		controls.left = false;
		controls.right = false;
		controls.up = false;
		controls.down = false;
		this.level = 1;
		this.points = 0;
		this.uptime = 0;
		enemies.splice(0, enemies.length);
		//for(var a = 0; a < this.enemies_on_start; a++)
			//enemies.push(new Enemy());
	},
	print_info_in_console: function(){
		console.log("---------------------------------------------");
		console.log("ZASADY GRY");
		console.log("Celem gracza jest dojście do zielonego pola na górze jak największą ilość razy.");
		console.log("Dotknięcie przeciwnika (czerwona kropka) oznacza koniec gry.");
		console.log("Z każdym kolejnym poziomem przeciwników jest coraz więcej.");
		console.log("Ilość punktów zależy od: ");
		console.log("-> obecnego poziomu i ilości przeciwników na mapie");
		console.log("-> łącznego promienia wszystkich przeciwników");
		console.log("-> czasu z jakim przeszło się dany poziom (oprócz pierwszego)");
		console.log("-> ustawień gry (wielkość mapy, szybkość gry, itp.)");
		console.log("---------------------------------------------");
		console.log("OBECNE USTAWIENIA GRY");
		console.log("> envi.timescale: " + envi.timescale + " ? Mnoznik predkosci gry. @ [1, 2...]");
		console.log("> envi.enemyzone_size: " + envi.enemyzone_size + " ? Wielkość pola z przeciwnikami. @ [570, 571...]");
		console.log("> envi.bouncing: " + envi.bouncing + " ? Czy przeciwnicy maja sie od siebie odbijac? @ [true/false]");
		console.log("> game.enemies_on_start: " + game.enemies_on_start + " ? Ilosc przeciwnikow na start. @ [1, 2...]");
		console.log("> game.enemies_on_start: " + game.enemies_on_next_level + " ? Ilosc przeciwnikow dodawanych z kolejnym poziomem. @ [0, 1, 2...]");
		console.log("---------------------------------------------");
		console.log("DODATKOWE INFORMACJE");
		console.log("Używaj strzałek do poruszania się pionkiem.");
		console.log("Możesz edytować powyższe ustawienia w konsoli.");
		console.log(" ");
	}
};

function is_cheating(t){
	if(t < (1800 / envi.timescale) && game.level > 2) return true;		//	def. 1800, max. ~1950
	else return false;
}


var controls = {
	left: false,
	right: false,
	up: false,
	down: false,
	
	enable: function(){
		if(keyCode === LEFT_ARROW) controls.left = true;
		if(keyCode === RIGHT_ARROW) controls.right = true;
		if(keyCode === UP_ARROW) controls.up = true;
		if(keyCode === DOWN_ARROW) controls.down = true;
	},
	disable: function(){
		if(keyCode === LEFT_ARROW) controls.left = false;
		if(keyCode === RIGHT_ARROW) controls.right = false;
		if(keyCode === UP_ARROW) controls.up = false;
		if(keyCode === DOWN_ARROW) controls.down = false;
	}
};

var player;

function Player(){
	this.radius = 15;
	this.posx = (width/2);
	this.posy = (height - this.radius);
	this.speed = 5;
	
	this.display = function(){
		stroke(50, 100, 255);
		strokeWeight(5);
		fill(255);
		ellipse(this.posx, this.posy, this.radius*2);
	}
	this.move = function(){
		if(controls.left && (player.posx - this.radius > 0)) player.posx -= player.speed*envi.timescale;
		if(controls.right && (player.posx + this.radius < width)) player.posx += player.speed*envi.timescale;
		if(controls.up) player.posy -= player.speed*envi.timescale;
		if(controls.down && (player.posy + this.radius < height)) player.posy += player.speed*envi.timescale;
		
		if(player.posy - this.radius <= 0){
			game.nextLevel();
		}
	}
	this.detect_collision = function(){
		for(var a = 0; a < enemies.length; a++){
			if(dist(this.posx, this.posy, enemies[a].posx, enemies[a].posy) < this.radius + enemies[a].size/2){
				game.lose();
			}
		}
	}
}

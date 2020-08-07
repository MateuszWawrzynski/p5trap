
var enemies = [];

function Enemy(){
	this.posx = round(random(0 + 20, width - 20));
	this.posy = round(random(0 + 20, height - envi.safezone_size - 20));
	//this.posx = round(random(20, width - 20));
	//this.posy = round(random(20, height - envi.safezone_size - 20));
	this.size = round(random(10, 20));
	this.color = round(100 + frameCount*10%155);
	this.velocityx = 0;
	while(this.velocityx == 0)
		this.velocityx = round(random(2, 4) * random(-1, 1));
	this.velocityy = 0;
	while(this.velocityy == 0)
		this.velocityy = round(random(2, 4) * random(-1, 1));
	
	this.display = function(){
		this.color = round(100 + frameCount*10%155);
		fill(this.color, 0, 0);
		stroke(150, 0, 0);
		ellipse(this.posx, this.posy, this.size, this.size);
	}
	this.move = function(){
		this.posx += this.velocityx*envi.timescale;
		this.posy += this.velocityy*envi.timescale;
		
		if(this.posx - this.size/2 < 0) this.velocityx *= -1;
		if(this.posx + this.size/2 > width) this.velocityx *= -1;
		if(this.posy - this.size/2 < 0 + 5) this.velocityy *= -1;
		if(this.posy + this.size/2 > height - envi.safezone_size) this.velocityy *= -1;
	}
}

function enemies_bounce(){
	for(var a = 0; a < enemies.length; a++){
		for(var b = 0; b < enemies.length; b++){
			if(dist(enemies[a].posx, enemies[a].posy, enemies[b].posx, enemies[b].posy) < enemies[a].size/2 + enemies[a].size/2 && a != b){
				
				//console.log("COLLISION BETWEEN ENEMIES! " + a + " : " + b);
				
				if(enemies[a].velocityx > 0 && enemies[b].velocityx < 0 || enemies[a].velocityx < 0 && enemies[b].velocityx > 0){
					enemies[a].velocityx *= -1;
					enemies[b].velocityx *= -1;
				}
				if(enemies[a].velocityy > 0 && enemies[b].velocityy < 0 || enemies[a].velocityy < 0 && enemies[b].velocityy > 0){
					enemies[a].velocityy *= -1;
					enemies[b].velocityy *= -1;
				}
				if(enemies[a].velocityx > 0 && enemies[b].velocityx > 0 || enemies[a].velocityx < 0 && enemies[b].velocityx < 0){
					if(enemies[a].velocityy > 0 && enemies[b].velocityy > 0 || enemies[a].velocityy < 0 && enemies[b].velocityy < 0){
						if(enemies[a].velocityx + enemies[a].velocityy > enemies[b].velocityx + enemies[b].velocityy){
							enemies[a].velocityx *= -1;
							enemies[a].velocityy *= -1;
						}else{
							enemies[b].velocityx *= -1;
							enemies[b].velocityy *= -1;
						}
					}else{
						enemies[a].velocityy *= -1;
						enemies[b].velocityy *= -1;
					}
				}
				if(enemies[a].velocityy > 0 && enemies[b].velocityy > 0 || enemies[a].velocityy < 0 && enemies[b].velocityy < 0){
					if(enemies[a].velocityx > 0 && enemies[b].velocityx > 0 || enemies[a].velocityx < 0 && enemies[b].velocityx < 0){
						if(enemies[a].velocityx + enemies[a].velocityy > enemies[b].velocityx + enemies[b].velocityy){
							enemies[a].velocityx *= -1;
							enemies[a].velocityy *= -1;
						}else{
							enemies[b].velocityx *= -1;
							enemies[b].velocityy *= -1;
						}
					}else{
						enemies[a].velocityx *= -1;
						enemies[b].velocityx *= -1;
					}
				}
			}
		}
	}
}

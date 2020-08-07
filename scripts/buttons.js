
var buttons = [];

function buttons_create(){
	buttons.push(new Button(width/3, height/10*5, width/3, height/20, 0, 0));	//	scene_mainmenu - play
	buttons.push(new Button(width/3, height/10*6, width/3, height/20, 1, 0));	//	scene_mainmenu - settings
	buttons.push(new Button(width/3, height/10*7, width/3, height/20, 2, 0));	//	scene_mainmenu - rules

	//buttons.push(new Button(0, height-envi.safezone_size/2, width/5, envi.safezone_size/2-2, 3, 1));	//	scene_playing - go back to main menu
	buttons.push(new Button(width/3, height/3*2, width/3, height/20, 3, 2));	//	scene_gameover - go back to main menu
}

function draw_buttons(){
	for(var a = 0; a < buttons.length; a++){
		if(buttons[a].sc == scene.currentscene){
			buttons[a].display();
		}
	}
}

function is_button_clicked(){
	for(var a = 0; a < buttons.length; a++){
		if(mouseX >= buttons[a].x && mouseX <= buttons[a].x + buttons[a].w && mouseY >= buttons[a].y && mouseY <= buttons[a].y + buttons[a].h){
			if(buttons[a].sc == scene.currentscene){
				buttons[a].clicked();
			}
		}
	}
}

function Button(x, y, w, h, id, sc){	//posx, posy, width, height, id_button, scene
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.id = id;
	this.sc = sc;
	
	this.display = function(){
		fill(255);
		noStroke();
		rect(this.x, this.y, this.w, this.h);
		
		noStroke();
		fill(100);
		textAlign(CENTER);
		textSize(16);
		textStyle(BOLD);
		if(id == 0){
			text("GRAJ", this.x + this.w/2, this.y + this.h/1.5);
		}
		else if(id == 1){
			text("USTAWIENIA", this.x + this.w/2, this.y + this.h/1.5);
		}
		else if(id == 2){
			text("ZASADY GRY", this.x + this.w/2, this.y + this.h/1.5);
		}
		else if(id == 3){
			text("DO MENU", this.x + this.w/2, this.y + this.h/1.5);
		}
	}
	this.clicked = function(){
		if(id == 0){
			scene.set(1);
			game.start();
		}
		else if(id == 1){
			scene.set(3);
		}
		else if(id == 2){
			scene.set(4);
		}
		else if(id == 3){
			scene.set(0);
		}
	}
}

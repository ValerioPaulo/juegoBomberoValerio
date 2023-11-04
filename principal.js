
var juego= new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;
var string = "La revolución no será televisada.";

var estadoPrincipal={

	preload:function () {
	
	juego.load.image('fondo','img/bg.jpeg');
	//juego.load.image('pajaro','img/pajaro1.png');
	//juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
	//juego.load.spritesheet('personas','img/persona.png',64,64);
	juego.load.spritesheet('personas','img/bombero.png',64,64);
	console.log("Valerio");
	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
		
		
		//flappy = juego.add.sprite(100,100,'pajaros');		
		//flappy.scale.setTo(1);
		//flappy.animations.add('vuelo',[0,1,2],10,true);

		persona = juego.add.sprite(juego.width/2,juego.height/2,'personas');	
		persona.anchor.setTo(0.5);
		
		persona.animations.add('arriba',[12,13,14,15],10,true);
		persona.animations.add('izquierda',[4,5,6,7],10,true);
		persona.animations.add('abajo',[0,1,2,3],10,true);
		persona.animations.add('derecha',[8,9,10,11],10,true);


		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds=true;

	},

	update:function(){		
		fondoJuego.tilePosition.x-=1;		
		//flappy.animations.play('vuelo');
		if(teclaDerecha.isDown){

			persona.position.x+=2;
			persona.animations.play("derecha");	

			//flappy.x++;
		}else if(teclaIzquierda.isDown){
			persona.position.x-=2;
			persona.animations.play("izquierda");
			//flappy.x--;
		}else if(teclaArriba.isDown){
			persona.position.y-=2;
			persona.animations.play("arriba");

			//flappy.y--;
		}else if(teclaAbajo.isDown){
			persona.position.y+=2;
			persona.animations.play("abajo");
			//flappy.y++;
		}
	}



};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');


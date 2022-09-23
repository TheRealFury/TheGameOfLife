tiles = [];

class terrainTile{
  constructor(x, y, width, height, terrain){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.terrain = terrain;
  }

  changeTerrain(terrain){
    this.terrain = terrain;
  }

  display(){
    if(this.terrain == 'grass'){
      fill('lightgreen');
    }
    rect(this.x, this.y, this.width, this.height);
  }
}

function setup(){
  createCanvas(700,600);
  for(let i = 0; i < 600; i += 0) {
    var tile = new terrainTile(i, 0, 50, 50, 'grass');
    append(tiles, tile);
  }
  
}

function draw(){
  background(220);
  for(let i = 0; i < tiles.length; i++) {
    tiles[i].display();
  }
  drawSprites();
}
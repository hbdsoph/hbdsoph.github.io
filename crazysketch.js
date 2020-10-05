var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  imgs = [];

  favs = [
    {name: 'monty', description: 'montgomery'},
    {name: 'pizza', description: 'margarita \'za'},
    {name: 'heart', description: 'the concept of love'},
    {name: 'dixie', description: 'dixie'},
    {name: 'ct', description: 'counter terrorism'},
    {name: 'phillip', description: 'phillips hue'},
    {name: 'tristan', description: 'mysterious stranger'},
    {name: 'natives', description: 'australian native flowers'},
    {name: 'attention', description: 'attention'},
    {name: 'ann', description: 'annnnnn perkins!'},
    {name: 'rammstein', description: 'rrramenensteinen'},
    {name: 'anna', description: 'annastacia palaszczuk'}
  ]
  
  for (let i = 0; i < favs.length; i++) {
    let imgpath = 'images/' + favs[i].name + '.png';
    imgs[i] = loadImage(imgpath);
  }
}

function setup() {
  vehicles = [];
  createCanvas(windowWidth - 8, windowHeight - 20);
  background(248, 131, 121);
  var points = [];
  for (var i = 0; i < 500; i++) {
    points[i] = {x: Math.random() * windowWidth, y: Math.random() * windowHeight};
  }

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    var vehicle = new Vehicle(pt.x, pt.y, 12, img);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(248, 131, 121);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

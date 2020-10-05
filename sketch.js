var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  //font = loadFont('Satisfaction.ttf');
  imgs = [];

  favs = [
    {name: 'monty', description: 'montgomery'},
    {name: 'pizza', description: 'margarita \'za'},
    {name: 'heart', description: 'love'},
    {name: 'dixie', description: 'dixie'},
    {name: 'ct', description: 'counter terrorism'},
    {name: 'phillip', description: 'phillips hue'},
    {name: 'tristan', description: 'mysterious stranger'},
  ]
  
  for (let i = 0; i < favs.length; i++) {
    let imgpath = 'images/' + favs[i].name + '.png';
    imgs[i] = loadImage(imgpath);

    var node = document.createElement("LI");
    var spannode = document.createElement("SPAN");
    var textnode = document.createTextNode(favs[i].description);
    var imgnode = document.createElement("IMG")
    imgnode.src = imgpath;

    spannode.appendChild(imgnode);
    spannode.appendChild(textnode);
    spannode.appendChild(imgnode.cloneNode(true));

    node.appendChild(spannode);
    document.getElementById("favourites").appendChild(node);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight * 0.3);
  background(248, 131, 121);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  // textToPoints(txt, x, y, fontSize, [options])
  fontSize = windowWidth / 9;
  var points = font.textToPoints('HAPPY BIRTHDAY', 7, fontSize, fontSize, {
    sampleFactor: 10 / fontSize
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    var vehicle = new Vehicle(pt.x, pt.y, windowWidth / 150, img);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
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
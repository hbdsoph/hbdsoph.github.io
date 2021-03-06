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

  var tip;
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    tip = "(try tapping or swiping around the message above)";
  } else {
    tip = "(try moving your mouse around the message above)";
  }

  var tipnode = document.createTextNode(tip)
  document.getElementById("tip").appendChild(tipnode);
}

function setup() {
  fontSize = windowWidth / 10;
  createCanvas(windowWidth * 0.9, fontSize * 1.2);
  background(248, 131, 121);
  var points = font.textToPoints('HAPPY BIRTHDAY', 7, fontSize, fontSize, {
    sampleFactor: 9.5 / fontSize
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    var vehicle = new Vehicle(pt.x, pt.y, windowWidth / 180, img);
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

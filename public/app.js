var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0xffffff);
var personGeom = new THREE.PlaneGeometry(1.5,2);
var globeGeom = new THREE.SphereGeometry(8,15,15);
var globeMat = new THREE.MeshBasicMaterial({color: 'blue'});
var globe = new THREE.Mesh(globeGeom,globeMat);


var x = -1 + Math.random() * 2;
var y = -1 + Math.random() * 2;
var z = -1 + Math.random() * 2;
var disatance = 1/ Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
x *= disatance;
y *= disatance; 
z *= disatance;
// function mapToGlobe(lat,lng,radius,height){
//   var phi = (lat)*MathPI/180;
//   var theta = (lng-180)*Math.PI/180;

//   var x = -(radius + height) + Math.cos(phi) * Math.cos(theta);
//   var y = (radius + height) * Math.sin(phi);
//   var z = (radius + height) * Math.cos(phi) * Math.sin(theta);

//   return new THREE.vector3(x,y,z);

// }

// var testCubeGeom = new THREE.CubeGeometry(1,1,1);
// var testCubeMat = new THREE.MeshBasicMaterial({color:'red'});
// var testCube = new THREE.Mesh(testCubeGeom,testCubeMat);
// testCube.position.x = 20;
// testCube.lookAt(new THREE.Vector3(0,0,0)); 

// scene.add(testCube);

// scene.add(globe);

//var light = new THREE.DirectionalLight(0xffffff,1);

//light.position.set(0,10,0);

//scene.add(light);


//var personTex = function(texture){
//  var tex = new THREE.TextureLoader().load(texture)
//  return tex;
//}  




var purpleTex = new THREE.TextureLoader().load("textures/manPurple.png")
var blueTex = new THREE.TextureLoader().load("textures/manBlue.png")
var lightBlueTex = new THREE.TextureLoader().load("textures/manLightBlue.png")
var greenTex = new THREE.TextureLoader().load("textures/manGreen.png")
var yellowTex = new THREE.TextureLoader().load("textures/manYellow.png")
var redTex = new THREE.TextureLoader().load("textures/manRed.png")
var darkRedTex = new THREE.TextureLoader().load("textures/manDarkRed.png")
var blackTex = new THREE.TextureLoader().load("textures/manBlack.png")

var personMat = function(texture){
  var mat = new THREE.MeshBasicMaterial({map:texture});  
  mat.alphaTest = 0.5;
  return mat
};
 

  var zPosition = -20;
  var xPosition = -20;
  var yPosition = 0;
  
  var makePersonIcon = function(geometry,material){ 
    var icon = new THREE.Mesh(geometry,material);
    icon.position.x = xPosition += 1;
    icon.position.y = yPosition;
    icon.position.z = zPosition;
    scene.add(icon);
    
  }

  var infoView = function(pop){

  };

  var globeview = function(pop){

  }
  
  var pop = 5765924340;
  
  var hundredMillionCheck = function(){
    for(i = 0; i < pop; i++){
      if(pop >= 100000000){
        makePersonIcon(personGeom,personMat(purpleTex));
        pop -= 100000000;
      } 

    }
  };
  var tenMillionCheck = function(){
    yPosition -= 2;
    xPosition = -20;
    zPosition += 2;
    for (var i = 0; i < pop; i++) {
      if(pop >= 10000000){
        makePersonIcon(personGeom,personMat(blueTex));
        pop -=10000000;   
      } 
    };
  };

  var millionCheck = function(){
    yPosition -=2;
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if(pop >= 1000000){
        makePersonIcon(personGeom,personMat(lightBlueTex));
        pop -= 1000000;
      }
    }
  };

  var hundredThousandCheck = function(){
    yPosition -=2; 
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 100000) {
        makePersonIcon(personGeom,personMat(greenTex));
        pop -= 100000;
      };
    }; 
  };

  var tenThousandCheck = function(){
    yPosition -=2;
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 10000) {
        makePersonIcon(personGeom,personMat(yellowTex));
        pop -= 10000;
      };
    }; 
  };


  var thousandCheck = function(){
    yPosition-=2;
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 1000) {
        makePersonIcon(personGeom,personMat(redTex));
        pop -= 1000;
      };
    }; 
  };

  var hundredCheck = function(){
    yPosition -=2;
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 100) {
        makePersonIcon(personGeom,personMat(darkRedTex));
        pop -= 100;
      };
    }; 
  };

  var oneCheck = function(){
    yPosition -=2;
    xPosition = -20;
    zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 1) {
        makePersonIcon(personGeom,personMat(blackTex));
        pop -= 1;
      };
    }; 
  };

  hundredMillionCheck();
  tenMillionCheck
  millionCheck();
  hundredThousandCheck();
  tenThousandCheck();
  thousandCheck();
  hundredCheck();
  oneCheck();



 
  camera.position.z = 18;
 
  var render = function () {
  requestAnimationFrame( render );
  globe.rotation.y += 0.001
  renderer.render(scene, camera);
  };

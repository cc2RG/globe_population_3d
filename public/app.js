var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

var personGeom = new THREE.PlaneGeometry(1.5,2);

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
 

 
  var Xposition = -20;
  var Yposition = 0;
  
  var makePersonIcon = function(geometry,material){ 
    var icon = new THREE.Mesh(geometry,material);
    icon.position.x = Xposition += 1;
    icon.position.y = Yposition;
    if( Xposition > 20){
      Xposition = -20;
      Yposition -= 1;
    }
    scene.add(icon);
  }


  
  var pop = 126769627;
  
  var hundredMillionCheck = function(){
    for(i = 0; i < pop; i++){
      if(pop >= 100000000){
        makePersonIcon(personGeom,personMat(purpleTex));
        pop -= 100000000;
      } 

    }
  };
  var tenMillionCheck = function(){
    for (var i = 0; i < pop; i++) {
      if(pop >= 10000000){
        makePersonIcon(personGeom,personMat(blueTex));
        pop -=10000000;   
      } 
    };
  };

  var millionCheck = function(){
    for(var i = 0; i < pop; i++){
      if(pop >= 1000000){
        makePersonIcon(personGeom,personMat(lightBlueTex));
        pop -= 1000000;
      }
    }
  };

  var hundredThousandCheck = function(){
    for(var i = 0; i < pop; i++){
      if (pop >= 100000) {
        makePersonIcon(personGeom,personMat(greenTex));
        pop -= 100000;
      };
    }; 
  };

  var tenThousandCheck = function(){
    for(var i = 0; i < pop; i++){
      if (pop >= 10000) {
        makePersonIcon(personGeom,personMat(yellowTex));
        pop -= 10000;
      };
    }; 
  };


  var thousandCheck = function(){
    for(var i = 0; i < pop; i++){
      if (pop >= 1000) {
        makePersonIcon(personGeom,personMat(redTex));
        pop -= 1000;
      };
    }; 
  };

  var hundredCheck = function(){
    for(var i = 0; i < pop; i++){
      if (pop >= 100) {
        makePersonIcon(personGeom,personMat(darkRedTex));
        pop -= 100;
      };
    }; 
  };

  var oneCheck = function(){
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



 
  camera.position.z = 10;
  
  var render = function () {
  requestAnimationFrame( render );
  renderer.render(scene, camera);
  };

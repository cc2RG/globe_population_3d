var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
camera.position.set(0,0,0);
var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor('ghostwhite');


var personGeom = new THREE.PlaneGeometry(0.75,1);




var purpleTex = new THREE.TextureLoader().load("textures/manPurple.png")
var blueTex = new THREE.TextureLoader().load("textures/manBlue.png")
var lightBlueTex = new THREE.TextureLoader().load("textures/manLightBlue.png")
var greenTex = new THREE.TextureLoader().load("textures/manGreen.png")
var yellowTex = new THREE.TextureLoader().load("textures/manYellow.png")
var redTex = new THREE.TextureLoader().load("textures/manRed.png")
var darkRedTex = new THREE.TextureLoader().load("textures/manDarkRed.png")
var blackTex = new THREE.TextureLoader().load("textures/manBlack.png")

var personMat = function(texture){
  var mat = new THREE.MeshBasicMaterial({map:texture, side:THREE.DoubleSide});  
  mat.alphaTest = 0.5;
  
  return mat
};
 
  
  var makePersonIcon = function(geometry,material){ 
    var icon = new THREE.Mesh(geometry,material);
    
    var x = -1 + Math.random() * 2;
    var y = -1 + Math.random() * 2;
    var z = -1 + Math.random() * 2;
    var disatance = 10/ Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
    x *= disatance;
    y *= disatance; 
    z *= disatance;


    icon.position.x = x;
    icon.position.y = y;
    icon.position.z = z;
    
    icon.lookAt(new THREE.Vector3(0,0,0));
  
    scene.add(icon);
    
  }

 
  var pop = 60000000;
  
  // var hundredMillionCheck = function(){
  //   for(i = 0; i < pop; i++){
  //     if(pop >= 100000000){
  //       makePersonIcon(personGeom,personMat(purpleTex));
  //       pop -= 100000000;
  //     } 

  //   }
  // };
  // var tenMillionCheck = function(){
  //   // yPosition -= 2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for (var i = 0; i < pop; i++) {
  //     if(pop >= 10000000){
  //       makePersonIcon(personGeom,personMat(blueTex));
  //       pop -=10000000;   
  //     } 
  //   };
  // };

  // var millionCheck = function(){
  //   // yPosition -=2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for(var i = 0; i < pop; i++){
  //     if(pop >= 1000000){
  //       makePersonIcon(personGeom,personMat(lightBlueTex));
  //       pop -= 1000000;
  //     }
  //   }
  // };

  var hundredThousandCheck = function(){
    // yPosition -=2; 
    // xPosition = -20;
    // zPosition += 2;
    for(var i = 0; i < pop; i++){
      if (pop >= 10000) {
        makePersonIcon(personGeom,personMat(lightBlueTex));
        pop -= 10000;
      };
    }; 
  };

  // var tenThousandCheck = function(){
  //   // yPosition -=2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for(var i = 0; i < pop; i++){
  //     if (pop >= 10000) {
  //       makePersonIcon(personGeom,personMat(yellowTex));
  //       pop -= 10000;
  //     };
  //   }; 
  // };


  // var thousandCheck = function(){
  //   // yPosition-=2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for(var i = 0; i < pop; i++){
  //     if (pop >= 1000) {
  //       makePersonIcon(personGeom,personMat(redTex));
  //       pop -= 1000;
  //     };
  //   }; 
  // };

  // var hundredCheck = function(){
  //   // yPosition -=2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for(var i = 0; i < pop; i++){
  //     if (pop >= 100) {
  //       makePersonIcon(personGeom,personMat(darkRedTex));
  //       pop -= 100;
  //     };
  //   }; 
  // };

  // var oneCheck = function(){
  //   // yPosition -=2;
  //   // xPosition = -20;
  //   // zPosition += 2;
  //   for(var i = 0; i < pop; i++){
  //     if (pop >= 1) {
  //       makePersonIcon(personGeom,personMat(blackTex));
  //       pop -= 1;
  //     };
  //   }; 
  // };

  // hundredMillionCheck();
  // tenMillionCheck
  // millionCheck();
  hundredThousandCheck();
  // tenThousandCheck();
  // thousandCheck();
  // hundredCheck();
  // oneCheck();



 
  camera.position.z = 20;
  //camera.lookAt(new THREE.Vector3(0,0,0));
  camera.lookAt(scene.position)
  var render = function () {
  requestAnimationFrame(render);
  scene.rotation.y += 0.01;  
    renderer.render(scene, camera);
    
  };

var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
var pop = 1000000;






var personGeom = new THREE.PlaneGeometry(1.5,2);
  

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
 
//var purpleMat = new THREE.MeshBasicMaterial({map:purpleTex}); 
  //  purpleMat.alphaTest = 0.5;
 
  var Xposition = 0;
  var Yposition = 0;
  
  var makePersonIcon = function(geometry,material){
    
    var icon = new THREE.Mesh(geometry,material);
    icon.position.x = Xposition += 1;
    scene.add(icon);
  }

  //makePersonIcon(manMarkerGeom, purpleMat);
  makePersonIcon(personGeom, personMat(redTex));
  makePersonIcon(personGeom, personMat(yellowTex));

  




 
      camera.position.z = 10;

      var render = function () {
        requestAnimationFrame( render );
       

        renderer.render(scene, camera);
      };

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
camera.position.set(0,0,0);
var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor('ghostwhite');


var personGeom = new THREE.PlaneGeometry(1.5,2);

var personTex = new THREE.TextureLoader().load("textures/manLightBlue.png")


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
    var distance = 10/ Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
    x *= distance;
    y *= distance; 
    z *= distance;


    icon.position.x = x;
    icon.position.y = y;
    icon.position.z = z;
    
    icon.lookAt(new THREE.Vector3(0,0,0));
  
    scene.add(icon);
    
  }

  var generateIcons = function(pop,numberPerIcon){
    var startingPop = pop;
    for(var i = 0; i < startingPop; i++){
      if (pop >= numberPerIcon) {
        makePersonIcon(personGeom,personMat(personTex));
        pop -= numberPerIcon;
      };
    }; 
  };

  
  generateIcons(200,1);

 
  camera.position.z = 20;
  camera.lookAt(scene.position)
  var render = function () {
  requestAnimationFrame(render);
  scene.rotation.y += 0.001;  
  renderer.render(scene, camera);
    
  };

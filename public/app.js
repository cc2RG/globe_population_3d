var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );


var manMarkerGeom = new THREE.PlaneGeometry(1,2);
  var manMarkerTexture = new THREE.TextureLoader().load("textures/manPurple.png")
  var manMarkerMaterial = new THREE.MeshBasicMaterial({map:manMarkerTexture});
  
  manMarkerTexture.wrapS = THREE.RepeatWrapping;
  manMarkerTexture.wrapT = THREE.RepeatWrapping;
  manMarkerTexture.repeat.set(1,1);  
  var manMarker = new THREE.Mesh(manMarkerGeom,manMarkerMaterial);
  scene.add( manMarker );
   






 //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
     // var material = new THREE.MeshBasicMaterial( { color: 'wheat' } );
      //var cube = new THREE.Mesh( geometry, material );
      //scene.add( cube );

      camera.position.z = 5;

      var render = function () {
        requestAnimationFrame( render );
        //manMarker.position.z -= 0.01
        //cube.rotation.y += 0.01

        renderer.render(scene, camera);
      };

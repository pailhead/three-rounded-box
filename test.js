var createApp = require('canvas-testbed')

var THREE = require('three')
var RoundedBoxGeometry = require('./')(THREE)

var FPSCounter = require('three-fps-counter')(THREE);

createApp(render, start, {
    context: 'webgl',
    onResize: resize
});

var renderer,
    scene,
    camera,
    controls,
    screenQuad,
    box,
    fps
;

function start(gl, width, height) {

    renderer = new THREE.WebGLRenderer({
        canvas: gl.canvas
    });

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, width/height, 1, 1000);
    camera.position.set( 10, 10 , 10);
    camera.lookAt(new THREE.Vector3());

    box = new THREE.Mesh( new RoundedBoxGeometry( 2 , 2 , 2 , .25 , 3 ) , new THREE.MeshPhongMaterial({color:'red'}));

    scene.add(box);

    var dLight = new THREE.DirectionalLight(0xffffff,1);
    dLight.position.set( -10,10,10 );

    scene.add( dLight );

    fps = new FPSCounter( renderer );

    fps.setScreenSize( renderer.getSize().width ,  renderer.getSize().height );

}

function render(gl, width, height) {


    box.rotation.y += 0.02;

    renderer.render(scene, camera);

    fps.render();
}

function resize(width, height) {
    if (!renderer)
        return;


    renderer.setViewport(0, 0, width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    fps.setScreenSize( width , height );

}
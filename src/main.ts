import * as THREE from 'three';
import MainScene from './scene/MainScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 5);
camera.lookAt(0, 0, 0);

// Renderer 
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById('app') as HTMLCanvasElement
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene 
const scene = new MainScene(camera);
// scene.initialize();
scene.add(new THREE.GridHelper(4, 12, 0x888888, 0x444444));


//Background Texture
const textureLoader = new THREE.TextureLoader();
const texturePath = 'assets/image/background/Night_01.jpeg';
textureLoader.load(texturePath, texture => {
  scene.background = texture;
})


// Orbital Control
const control: OrbitControls = new OrbitControls(camera, renderer.domElement);

// Create 3D Object 
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({color: 0x00ff00})
);
const cone1 = new THREE.Mesh(
  new THREE.ConeGeometry(0.1, 1, 30),
  new THREE.MeshBasicMaterial({color: 0x0000ff})
);
const cone2 = new THREE.Mesh(
  new THREE.ConeGeometry(0.1, 1, 30),
  new THREE.MeshBasicMaterial({color: 0x0000ff})
);
const rightEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.1),
  new THREE.MeshBasicMaterial({color: 0xffffff})
);
const leftEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.1),
  new THREE.MeshBasicMaterial({color: 0xffffff})
);
const rightBlackEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.05),
  new THREE.MeshBasicMaterial({color: 0x000000})
);
const leftBlackEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.05),
  new THREE.MeshBasicMaterial({color: 0x000000})
);
const mouth = new THREE.Mesh(
  new THREE.TorusGeometry(0.001),
  new THREE.MeshBasicMaterial({color: 0xf50022})
);

cube.position.y = 0.5;

cone1.position.y = 1.5;
cone1.position.x = 0.3;

cone2.position.y = 1.5;
cone2.position.x = -0.3;

rightEye.position.y = 0.7;
rightEye.position.x = 0.3;
rightEye.position.z = 0.5;

leftEye.position.y = 0.7;
leftEye.position.x = -0.3;
leftEye.position.z = 0.5;

rightBlackEye.position.y = 0.7;
rightBlackEye.position.x = 0.3;
rightBlackEye.position.z = 0.57;

leftBlackEye.position.y = 0.7;
leftBlackEye.position.x = -0.3;
leftBlackEye.position.z = 0.57;

mouth.position.y = 0.5;
mouth.position.z = 0.3;

scene.add(
  cube, 
  cone1, 
  cone2, 
  rightEye, 
  leftEye, 
  rightBlackEye, 
  leftBlackEye,
  mouth
);

// Animate
function animate() {
  // scene.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
import * as THREE from 'three';
import MainScene from './scene/MainScene';

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 5, 5);
// camera.lookAt(0, 0, 0);

// Renderer 
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById('app') as HTMLCanvasElement
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene 
const scene = new MainScene(camera);
scene.initialize();

// Background Texture
const textureLoader = new THREE.TextureLoader();
const texturePath = 'assets/image/background/Bridge_01.jpeg';
textureLoader.load(texturePath, texture => {
  scene.background = texture;
})

// Animate
function animate() {
  scene.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
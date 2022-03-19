import * as THREE from 'three';
import MainScene from './scene/MainScene';
// import SoundObject from './object/SoundObject';

/* Initial */

// Get Width and Height. 
const width: number = window.innerWidth;
const height: number = window.innerHeight;

// Create Graphics Renderer. 
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
});

// Set Renderer's Area. 
renderer.setSize(width, height);

// Create Main Camera as a Perspective Camera. (The Parameters are Field of View, Aspect Ratio, Near Plane, and Far Plane.) 
const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);

// Create Scene. 
const scene = new MainScene(mainCamera);

// Create Image Background Texture. 
const textureLoader = new THREE.TextureLoader();
const texturePath = "assets/image/background/Bridge_01.jpeg";
textureLoader.load(texturePath, (texture) => {
  scene.background = texture;
});


/* Drawing */
// Create Drawing Function in another module and imply to this.
scene.initialize();


/* Rendering */ 

// Using Renderer to render the Scene and the Main Camera. 

function tick() {
  scene.update();
  renderer.render(scene, mainCamera); 
  requestAnimationFrame(tick);
}

tick(); 
import * as THREE from 'three';

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
const scene = new THREE.Scene;



/* Drawing. */

// Create Geometry and Material. 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({color: 0xFFAA00});

// Create Cube Mesh. 
const cube = new THREE.Mesh(geometry, material);
cube.position.z = -5; // Assign Local Position (Z) of an abject. 
cube.position.y = 1; // Assign Local Position (Y) of an object. 

// Add Cube Mesh to Scene. 
scene.add(cube);

// Create Light. 
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(0, 4, 2);

// Add Light to Scene. 
scene.add(light);



/* Rendering */ 

// Using Renderer to render the Scene and the Main Camera. 
renderer.render(scene, mainCamera); 
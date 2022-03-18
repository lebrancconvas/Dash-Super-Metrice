import * as THREE from 'three';

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

// Using Renderer to render the Scene and the Main Camera. 
renderer.render(scene, mainCamera); 
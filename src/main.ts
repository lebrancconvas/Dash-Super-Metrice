import * as THREE from 'three';

const width: number = window.innerWidth;
const height: number = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
});

renderer.setSize(width, height);

const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);

const scene = new THREE.Scene;

renderer.render(scene, mainCamera); 
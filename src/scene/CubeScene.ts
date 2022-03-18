import * as THREE from 'three';

class CubeScene extends THREE.Scene {
	
	// Scene Method. 
	initialize() {
		this.createCube(); 
		this.createLight();
	}

	update() {
		
	}

	// Creation Method. 
	createCube() {
			// Create Geometry and Material. 
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshPhongMaterial({color: 0xFFAA00});
	
			// Create Cube Mesh. 
			const cube = new THREE.Mesh(geometry, material);
			cube.position.z = -5; // Assign Local Position (Z) of an abject. 
			cube.position.y = 1; // Assign Local Position (Y) of an object. 
	
			// Add Cube Mesh to Scene. 
			this.add(cube);
	}

	createLight() {
			// Create Light. 
			const light = new THREE.DirectionalLight(0xFFFFFF, 1);
			light.position.set(0, 4, 2);
	
			// Add Light to Scene. 
			this.add(light);
	}
}

export default CubeScene;
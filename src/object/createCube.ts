import * as THREE from 'three';

class Cube extends THREE.Scene {
	createCube() {
		//Create Geometry and Material. 
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshPhongMaterial({color: 0xFFAA00});
	
		// Create Cube Mesh. 
		const cube = new THREE.Mesh(geometry, material);
		cube.position.z = -5; // Assign Local Position (Z) of an abject. 
		cube.position.y = 1; // Assign Local Position (Y) of an object. 
	
		// Add Cube Mesh to Scene. 
		this.add(cube);
	}
}

export default Cube;
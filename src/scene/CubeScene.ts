import * as THREE from 'three';

import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

const π = Math.PI;

class CubeScene extends THREE.Scene {

	// Assign Loader Variable. 
	private readonly fbxLoader = new FBXLoader();
	private readonly mtlLoader = new MTLLoader();
	private readonly objLoader = new OBJLoader();

	// Assign Assets's Path Variable. 
	assetName = "block";

	assetsBasePath = "../../public/assets/";
	assetsType = "3d/";

	assetsMTLTarget = `Platformer_Kit/Models/OBJ format/${this.assetName}.mtl`;
	assetsMTLPath = `${this.assetsBasePath}${this.assetsType}${this.assetsMTLTarget}`;
	
	assetsOBJTarget = `Platformer_Kit/Models/OBJ format/${this.assetName}.obj`;
	assetsOBJPath = `${this.assetsBasePath}${this.assetsType}${this.assetsOBJTarget}`;
	
	// Scene Method. 
	async initialize() {
		const objectMTL = await this.mtlLoader.loadAsync(this.assetsMTLPath);
		objectMTL.preload();

		const block1 = await this.createObject(objectMTL);
		const block2 = await this.createObject(objectMTL);

		this.translateObject(block1, -1, -0.8, -5);
		this.translateObject(block2, 1, -0.8, -5);

		this.add(block1, block2);

		this.createLight();
	}

	private async createObject(mtl: MTLLoader.MaterialCreator) {
		this.objLoader.setMaterials(mtl);

		const model = await this.objLoader.loadAsync(this.assetsOBJPath);
		model.rotateX(this.degreeToRadian(20));

		return model;
	} 

	private async translateObject(object: THREE.Group, xAxis: number, yAxis: number, zAxis: number) {
		object.position.x = xAxis;
		object.position.y = yAxis;
		object.position.z = zAxis;
	}

	private async rotateObject(object: any , xAxis: unknown, yAxis: unknown, zAxis: unknown) {
		object.rotateX = xAxis;
		object.rotateY = yAxis;
		object.rotateZ = zAxis;
	}

	degreeToRadian(degree: number) {
		return degree * (π / 180);
	} 

	update() {

	}


	// Creation Method. 

	createLight() {
			// Create Light. 
			const light = new THREE.DirectionalLight(0xFFFFFF, 1);
			light.position.set(0, 4, 5);
	
			// Add Light to Scene. 
			this.add(light);
	}
}

export default CubeScene;
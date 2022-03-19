import * as THREE from 'three';

// import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

const π = Math.PI;

class MainScene extends THREE.Scene {

	// Assign Loader Variable. 
	// private readonly fbxLoader = new FBXLoader();
	private readonly mtlLoader = new MTLLoader();
	private readonly objLoader = new OBJLoader();

	private readonly camera = new THREE.PerspectiveCamera;

	private readonly keyDown = new Set<String>;

	private racecar?: THREE.Group;
	private directionVector = new THREE.Vector3();

	constructor(camera: THREE.PerspectiveCamera) {
		super();
		this.camera = camera;
	}
	
	// Scene Method. 
	async initialize() {
		const block1 = await this.loadObject('Platformer_Kit', 'block');
		const block2 = await this.loadObject('Platformer_Kit', 'block');
		const bridge = await this.loadObject('Platformer_Kit', 'bridge');
		this.racecar = await this.loadObject('Car_kit', 'race');

		this.translateObject(block1, -1, -0.8, -5);
		this.translateObject(block2, 1, -0.8, -5);
		this.translateObject(bridge, 0, -0.5, -5);
		this.translateObject(this.racecar, 0, -1, -5);

		this.racecar.add(this.camera);
		this.camera.position.z = 3;
		this.camera.position.y = 2;
		this.camera.position.x = 0;
		this.camera.rotateX(this.degreeToRadian(-30));

		this.add(block1, block2, bridge, this.racecar);

		this.createLight(0, 5, 5);

		document.addEventListener('keydown', this.handleKeyDown);
		document.addEventListener('keyup', this.handleKeyUp);
	}
	
	update() {
		this.updateInput();
	}


	private handleKeyDown = (event: KeyboardEvent) => {
		this.keyDown.add(event.key.toLowerCase());
	}

	private handleKeyUp = (event: KeyboardEvent) => {
		this.keyDown.delete(event.key.toLowerCase());
	}

	private updateInput() {
		const dir = this.directionVector;
		this.camera.getWorldDirection(dir);
		const speed = 0.1;
		if(this.keyDown.has('w')) {
			this.racecar.position.y = speed;
		} else if(this.keyDown.has('s')) {
			this.racecar.position.y = -speed;
		} else if(this.keyDown.has('a')) {
			this.racecar.position.x = -speed;
		} else if(this.keyDown.has('d')) {
			this.racecar.position.x = speed;
		}
	}
	
	// Creation Method. 
	private async loadObject(objectSet: String, objectName: String) {
		const mtlPath = `assets/3d/${objectSet}/Models/OBJ format/${objectName}.mtl`;
		const objPath = `assets/3d/${objectSet}/Models/OBJ format/${objectName}.obj`;
		const MTL = await this.mtlLoader.loadAsync(mtlPath);
		MTL.preload();
		this.objLoader.setMaterials(MTL);

		const model = await this.objLoader.loadAsync(objPath);
		model.rotateX(this.degreeToRadian(16));

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

	createLight(xAxis: number, yAxis: number, zAxis: number) {
			// Create Light. 
			const light = new THREE.DirectionalLight(0xFFFFFF, 1);
			light.position.set(xAxis, yAxis, zAxis);
	
			// Add Light to Scene. 
			this.add(light);
	}
}

export default MainScene;
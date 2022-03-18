import * as THREE from 'three';

const soundPath = '../../public/assets/audio/bgm/SaGa-Frontier_Battle01.ogg';

class SoundInit extends THREE.Audio {
	soundLoad() {
		const audioLoader = new THREE.AudioLoader();
		audioLoader.load(soundPath, (buffer) => {
			this.setBuffer(buffer);
			this.setLoop(true);
			this.setVolume(0.5);
			this.play();
		})
	}
}

export default SoundInit;


import * as THREE from 'three';

export default class ViewGL {
    constructor(canvasRef) {

        this.canvasRef = canvasRef.current

        if(canvasRef.current){
            this.scene = new THREE.Scene();
            console.log(canvasRef.current);
            this.camera = new THREE.PerspectiveCamera(75, canvasRef.current.width / canvasRef.current.height, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer({
                canvas: this.canvasRef.current,
                antialias: false,
            });

            const cube = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshNormalMaterial()
            );

            this.scene.add(cube);

            this.update();
        }
    }

    updateValue(value) {
        // Whatever you need to do with React props
    }

    onMouseMove() {
        // Mouse moves
    }

    onWindowResize() {
        let canvas = this.canvasRef.current;
        this.renderer.setSize(canvas.width, canvas.height);
    }

    update(t) {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }
}

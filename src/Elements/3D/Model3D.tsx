import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const loadObj = async (path: string, fileName: string): Promise<any> => {

    return new Promise((res, rej) => {

        let loader = new OBJLoader();
        loader.setPath(path);
        loader.load(fileName, (object) => {
            res(object);
        });

    })

}

interface MyProps {
    width: string;
    height: string;
}

export default class Model3D extends React.Component<MyProps>{

    canvasRef: any;
    scene: any;
    renderer: any;
    divRef: any;
    camera: THREE.PerspectiveCamera | any;
    hasMounted: boolean;
    mesh: THREE.Mesh | any;
    speed: number;

    constructor(props: MyProps) {
        super(props);

        this.divRef = React.createRef();
        this.camera = null;
        this.hasMounted = false;
        this.speed = 1;

    }

    componentDidMount() {

        //avoid multiple scenes being created
        if (this.hasMounted) {
            return
        }

        //scene
        this.scene = new THREE.Scene();

        //renderer
        this.renderer = new THREE.WebGLRenderer( {alpha: true} );
        this.renderer.setSize(this.divRef.current.offsetWidth, this.divRef.current.offsetHeight);
        this.renderer.setClearColor(0xbb6700, 0);

        //add renderer to DOM
        this.divRef.current.appendChild(this.renderer.domElement);

        //camera
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.camera.position.z = 1.5;

        //light
        const pointLight = new THREE.PointLight( 0xffe993, 1, 100);
        pointLight.position.set(3, 3, 3);
        this.scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xbb1600, .25);
        this.scene.add(ambientLight);

        let material = new THREE.MeshLambertMaterial({ 
            color: 0xffe993
        });
        //create box and add to scene
        // this.mesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     material
        // );

        //import 3d model of my head into mesh and add to scene

        loadObj(process.env.PUBLIC_URL + '/assets/', 'ayden_head_scan.obj')
            .then((obj) => {
                this.mesh = new THREE.Mesh(
                    obj.children[0].geometry,
                    material
                );

                this.scene.add(this.mesh);

                this.camera.lookAt(this.mesh.position);

            })

        //rendering
        this.renderer.render(this.scene, this.camera);

        //hasMounted flag set to true
        this.hasMounted = true;

        this.animation();

        window.addEventListener('resize', this.handleResize);

    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize);
    }

    public animation = (): void => {
        requestAnimationFrame(this.animation);
        if (this.mesh instanceof THREE.Mesh) {
            // this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01 * this.speed;
            this.renderer.render(this.scene, this.camera);
        }
    }

    public onMouseOver = (): void => {
        this.speed = 3;
    }

    public onMouseOut = (): void => {
        this.speed = 1;
    }

    public handleResize = (): void => {
        
    }

    render() {
        return (
            <div ref={this.divRef} className="canvas-container" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}></div>
        )
    }

}

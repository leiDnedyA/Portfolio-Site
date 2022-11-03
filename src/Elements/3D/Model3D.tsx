import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import ViewGL from './ViewGL';

interface MyProps{
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
    box: THREE.Mesh | any;

    constructor(props: MyProps){
        super(props);

        this.divRef = React.createRef();
        this.camera = null;
        this.hasMounted = false;

    }

    componentDidMount(){

        //avoid multiple scenes being created
        if (this.hasMounted){
            return
        }

        //scene
        this.scene = new THREE.Scene();

        //renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(500, 500);
        this.renderer.setClearColor(0xbb6700);

        //add renderer to DOM
        this.divRef.current.appendChild(this.renderer.domElement);

        //camera
        this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
        this.camera.position.z = 5;

        //create box and add to scene
        this.box = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffe993 })
        );

        this.scene.add(this.box);

        this.camera.lookAt(this.box.position);

        //rendering
        this.renderer.render(this.scene, this.camera);

        //hasMounted flag set to true
        this.hasMounted = true;
    
        this.animation();
    }

    animation = () => {
        requestAnimationFrame(this.animation);
        if(this.box instanceof THREE.Mesh){
            this.box.rotation.x += 0.01;
            this.box.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        }
    }

    render(){
        return(
            <div ref={this.divRef} className="canvas-container"></div>
        )
    }

}

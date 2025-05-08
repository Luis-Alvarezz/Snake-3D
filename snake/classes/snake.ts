import { BoxGeometry, Color, Mesh, MeshStandardMaterial } from "three";
import { LifeCycle } from "../types/helpers";
import SceneManager from "../scene.manager";

export default class Snake implements LifeCycle {
    private head: Mesh;
    private geometry: BoxGeometry;
    private material: MeshStandardMaterial;
    private x: number = 0;
    private z: number = 0;
    private tail: Array<Mesh>[]; // * Cola


    constructor( ) {
        this.start();
    }
    
    public start(): void {
        // * Crear geometria, materiales, etc.
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshStandardMaterial({
            // * Json u Objeto
             color: new Color(0,0,1),
             emissive: new Color(0,0,1),
             metalness: 0.5,
             roughness: 0.55
             });
        this.head = new Mesh(this.geometry, this.material);
        this.head.position.set(this.x, 0, this.z);
        SceneManager.scene.add(this.head);
    }

    public update(): void {
        
    }

    public dispose(): void {
        
    }
}
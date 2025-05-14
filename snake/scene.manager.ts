import { Color, HemisphereLight, PerspectiveCamera, Scene } from "three";
import Diorama from "./classes/diorama";
import MenuState from "./states/menu.state";
import State from "./states/state";
import States from "./states/states";

export default class SceneManager {
    public static scene: Scene;
    public static camera: PerspectiveCamera;

    public static init() : void {
        SceneManager.createScene();
        SceneManager.createCamera();
        SceneManager.createLights();
        // const diorama = new Diorama();
        // diorama.start();
        SceneManager.onReady();
    }

    private static createScene() : void {
        SceneManager.scene = new Scene();
        SceneManager.scene.background = new Color(0x000000);
    }

    private static createCamera() : void {
        SceneManager.camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 100);
        SceneManager.camera.position.set(10,5,10);
        SceneManager.camera.lookAt(0,0,0);
        SceneManager.scene.add(SceneManager.camera);
    }

    private static createLights() : void {
        const ligth = new HemisphereLight(0xffffff, 0.2);
        ligth.position.set(100,100,100);
        SceneManager.scene.add(ligth);
    }

    // * Metodo que se ejecuta cuando el diorama esta listo para usar o cuando se cargan los assets o los objetos, texturas, modelos, etc.
    private static onReady(): void {
        MenuState.diorama = new Diorama();
        State.setCurrent(States.menu);
        MenuState.diorama.start();
    }
}
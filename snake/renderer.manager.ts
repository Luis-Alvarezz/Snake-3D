import { RenderTargetArray, WebGLRenderer } from "three";
import SceneManager from "./scene.manager";

export default class RendererManager {
    // * Clase encargada de renderer, post procesado, redimensionamiento de la pantalla, singleton (instaciar 1 vez unicamente la clase principal)
    private static renderer: WebGLRenderer;
    public static canvas: HTMLCanvasElement;

    private constructor() {
        // console.log('Numero de instancia 1');
        SceneManager.init();
        RendererManager.init();
        window.addEventListener('resize', RendererManager.rezise);
        RendererManager.renderLoop();
    }

    private static init() : void {
        RendererManager.getCanvas();
        RendererManager.createRenderer();
    }

    private static getCanvas() : void {
        RendererManager.canvas = document.getElementById('game') as HTMLCanvasElement;
    }

    private static createRenderer() : void {
        RendererManager.renderer = new WebGLRenderer({ antialias: true, canvas: RendererManager.canvas });
        RendererManager.renderer.setPixelRatio(window.devicePixelRatio);
        RendererManager.renderer.setSize(window.innerWidth, window.innerHeight);
        RendererManager.renderer.toneMappingExposure = 2;
    }


    private static renderLoop(): void {
        requestAnimationFrame(RendererManager.renderLoop);
        RendererManager.renderer.render(SceneManager.scene, SceneManager.camera);
    }


    private static rezise(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;
        SceneManager.camera.aspect = width / height;
        SceneManager.camera.updateProjectionMatrix(); // * Actualizar la matriz de proyeccion
        RendererManager.renderer.setSize(width, height);
        RendererManager.renderer.setPixelRatio(2);
    }

    public static startGame(): void {
        if (!RendererManager.renderer) {
            new RendererManager();
        }
    }
}
import { RenderTargetArray, WebGLRenderer } from "three";
import SceneManager from "./scene.manager";

export default class RendererManager {
    // * Clase encargada de renderer, post procesado, redimensionamiento de la pantalla, singleton (instaciar 1 vez unicamente la clase principal)
    private static renderer: WebGLRenderer;
    public static canvas: HTMLCanvasElement;

    private constructor() {
        SceneManager.init();
        RendererManager.init();
        window.addEventListener('resize', RendererManager.rezise);
        RendererManager.renderLoop();
    }

    private static init() : void {
        RendererManager.canvas = document.getElementById('game') as HTMLCanvasElement;
        RendererManager.renderer = new WebGLRenderer({ antialias: true, canvas: RendererManager.canvas });
        RendererManager.renderer.setPixelRatio(window.devicePixelRatio);
        RendererManager.renderer.setSize(window.innerWidth, window.innerHeight);
        RendererManager.renderer.toneMappingExposure = 2;
    }


    private static renderLoop(): void {

    }


    private static rezise(): void {
        
    }

    public static startGame(): void {
        if (!RendererManager.renderer) {
            new RendererManager();
        }
    }
}
import { Clock } from "three";
import SceneManager from "../scene.manager";
import { LifeCycle } from "../types/helpers";
import Food from "./food";
import Snake from "./snake";

export default class Game implements LifeCycle {
    private snake: Snake;
    private food: Food;
    private stop: boolean = false;
    private clock: Clock = new Clock();

    
    public start(): void {
        this.stop = false;
        this.snake = new Snake();
        this.food = new Food();
        SceneManager.camera.position.set(0,26,-8);
        SceneManager.camera.lookAt(0,0,0);
        this.update();
    }

    public update(): void {
        if (this.stop) return;
        requestAnimationFrame(this.update.bind(this)); // * bind porque el metodo usa this que es el requestAnimationFrame
        const delta = this.clock.getDelta();
        this.snake.update(delta);
    }

    public dispose(): void {
        this.stop = true;
        this.snake.dispose();
        this.food.dispose();
    }
}
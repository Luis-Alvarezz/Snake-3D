import SceneManager from "../scene.manager";
import { LifeCycle } from "../types/helpers";
import Food from "./food";
import Snake from "./snake";

export default class Game implements LifeCycle {
    private snake: Snake;
    private food: Food;
    private stop: boolean = false;

    
    public start(): void {
        this.stop = false;
        this.snake = new Snake();
        this.food = new Food();
        SceneManager.camera.position.set(0,26,-8);
        SceneManager.camera.lookAt(0,0,0);
    }

    public update(): void {
        
    }

    public dispose(): void {
        this.stop = true;
        this.snake.dispose();
        this.food.dispose();
    }
}
import { LifeCycle } from "../types/helpers";
import Food from "./food";
import Snake from './snake';
import Ground from "./ground";

export default class Diorama implements LifeCycle {
    private snake: Snake;
    private food: Food;
    private ground: Ground;

    public start(): void {
        this.snake = new Snake();
        this.food = new Food();
        this.ground = new Ground();
    }

    public update(): void {
        
    }

    public dispose(): void {
        this.snake.dispose();
        this.food.dispose();
    }
}
import { LifeCycle } from "../types/helpers";
import Food from "./food";
import Snake from './snake';

export default class Diorama implements LifeCycle {
    private snake: Snake;
    private food: Food;

    public start(): void {
        this.snake = new Snake();
        this.food = new Food();
    }

    public update(): void {
        
    }

    public dispose(): void {
        this.snake.dispose();
        this.food.dispose();
    }
}
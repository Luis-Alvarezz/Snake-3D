import { Component, ReactNode } from "react";
import RendererManager from "./renderer.manager";

export default class SnakeComponent extends Component {

    public componentDidMount(): void {
        RendererManager.startGame();
    }

    public render() : ReactNode {
        return (
            <div>
                <canvas id="game" className="fullscreen"></canvas>
            </div>
        )
    }
} 
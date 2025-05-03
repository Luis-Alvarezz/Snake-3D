import { Component, ReactNode } from "react";

export default class SnakeComponent extends Component {
    public render() : ReactNode {
        return (
            <div>
                <canvas id="game" className="fullscreen"></canvas>
            </div>
        )
    }
} 
import { Component, ReactNode } from "react";

export default class Panel extends Component {
    public render(): ReactNode {
        return (
            <div id="panel">
                <h3 className="title">Creditos</h3>
                <div className="text">
                    <p>Proyecto creado por Luis Alvarez</p>
                    <p>basado en http://github.com/BabylonJs/SpacePirates con la modificacion que se realizo este proyecto con Three.js</p>
                    <p>Para comprender la programacion de 3D</p>
                </div>
                <img src="/ui/textPanel.png" alt="Imagen Dialogo" />
            </div>
        )
    }
}
import CreditState from "./creditos.state";
import GameState from "./game.state";
import MenuState from "./menu.state";

export default class States {
    // * Clase para crear instancia de los estados
    public static menu = new MenuState;
    public static credit = new CreditState;
    public static game = new GameState;
}
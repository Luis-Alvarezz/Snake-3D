import CreditState from "./creditos.state";
import MenuState from "./menu.state";

export default class States {
    // * Clase para crear instancia de los estados
    public static menu = new MenuState;
    public static credit = new CreditState;
}
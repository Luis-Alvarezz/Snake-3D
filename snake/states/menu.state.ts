import Diorama from "../classes/diorama";
import { GUIManager } from "../gui.manager";
import State from "./state";

export default class MenuState extends State {

    public static diorama: Diorama;

    public enter(): void {
        // throw new Error("Method not implemented.");
        GUIManager.menuButtons();
    }

    public exit(): void {
        // throw new Error("Method not implemented.");
        GUIManager.clearButtons();
    }
}

// * Este codigo es mas particular, dependiendo del contexto de cada estado
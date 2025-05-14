import { GUIManager } from "../gui.manager";
import State from "./state";

export default class CreditState extends State {


    public enter(): void {
        // throw new Error("Method not implemented.");
        GUIManager.creditButtons();
    }

    public exit(): void {
        // throw new Error("Method not implemented.");
        GUIManager.clearButtons();
    }
}

// * Este codigo es mas particular, dependiendo del contexto de cada estado
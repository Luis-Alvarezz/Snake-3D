import { GUIManager } from "../gui.manager";
import State from "./state";

export default class CreditState extends State {


    public enter(): void {
        // throw new Error("Method not implemented.");
        GUIManager.creditButtons();
        setTimeout(() => {
            GUIManager.showHTML('panel');
        }, 0)
    }

    public exit(): void {
        // throw new Error("Method not implemented.");
        GUIManager.clearButtons();
        GUIManager.hiddenHTML('panel'); // * Ocultar GUI
    }
}

// * Este codigo es mas particular, dependiendo del contexto de cada estado
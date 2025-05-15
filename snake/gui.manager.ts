import State from "./states/state";
import States from "./states/states";

export class GUIManager {
    // * Metodos para menipular DOM
    public static menuButtons(): void {
        const menu = document.getElementById("menu");
        const credit = document.createElement("BUTTON");
        credit.className = 'button';
        credit.innerHTML = 'CREDITOS'
        credit.onclick = () => {
            State.setCurrent(States.credit)
        }
        const game = document.createElement("BUTTON");
        game.className = 'button';
        game.innerHTML = 'JUGAR'
        game.onclick = () => {
            State.setCurrent(States.game)
        }
        menu.appendChild(game)
        menu.appendChild(credit);
    }

    public static creditButtons(): void {
        const menu = document.getElementById("menu");
        const back = document.createElement("BUTTON");
        back.className = 'button';
        back.innerHTML = 'ATRAS'
        back.onclick = () => {
            State.setCurrent(States.menu)
        }
        menu.appendChild(back);
    }

    public static clearButtons(): void {
        const menu = document.getElementById("menu");
        menu.textContent = '';
    }


    public static showHTML(id: string, style = 'block') : void {
        const element = document.getElementById(id);
        element.style.display = style;
    }
    public static hiddenHTML(id: string) : void {
        const element = document.getElementById(id);
        element.style.display = 'none';
    }
}
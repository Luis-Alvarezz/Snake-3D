class Input {
    public up: boolean = false;
    public down: boolean = false;
    public left: boolean = false;
    public right: boolean = true;
}

// * Clase encargada de las direcciones
export default class InputManager {
    public input: Input = new Input(); // * Las clases tambien pueden ser un atributo

    constructor() {
        document.addEventListener('keydown', this.handleKey.bind(this));
    }

    private handleKey(e: KeyboardEvent): void {
        switch(e.key) {
            case 'w':
                this.input.up = true;
                this.input.down = false;
                this.input.left = false;
                this.input.right = false;
                break;
            case 'a':
                this.input.up = false;
                this.input.down = false;
                this.input.left = true;
                this.input.right = false;
                break;
            case 's':
                this.input.up = false;
                this.input.down = true;
                this.input.left = false;
                this.input.right = false;
                break;
            case 'd':
                this.input.up = false;
                this.input.down = false;
                this.input.left = false;
                this.input.right = true;
                break;
            default:
                break;
        }
    }
}
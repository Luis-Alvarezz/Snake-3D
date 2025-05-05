export interface LifeCycle {
    start: (...args: Array<any>) => void;
    update?: (...args: Array<any>) => void;
    dispose: (...args: Array<any>) => void;
}
// * Interfaz para indicar a las clases la forma o métodos que deben tener
export default abstract class State {
    // * Almacenamos el estado que se este ejecutando
    public static currentState: State | null = null;
    
    public static setCurrent(newState: State): void {
        // ! Usamos State porque tratamos con valores estaticos, no instancias, si fueran dinamicos utilizariamos this
        // * Si el estado que se quiere cambiar es el mismo que el que se esta ejecutando, no hacemos nada
        if (State.currentState === newState) return;

        // * Si el estado que se quiere cambiar es diferente al que se esta ejecutando, cambiamos el estado
        // * y ejecutamos los metodos enter y exit
        if (State.currentState) State.currentState.exit();

        State.currentState = newState;
        State.currentState.enter();
    }
    
    public abstract enter(): void
    public abstract exit(): void
    // * La clase abstracta no se puede instanciar, solo se puede extender
    // * Nos sirve como una guia, para definir que metodos debe tener una clase que la extiende
}
// * Es un codigo como 'Configuracion'

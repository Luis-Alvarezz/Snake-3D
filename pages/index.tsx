import { Component, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const SnakeComponent = dynamic(() => import('../snake'), {ssr: false}); // * lazy loading para hacer pesada la pagina con assets, componentes, etc 
// * | ssr: false para que no se renderice en el servidor (porque trabajamos con WebGL y ventana windows )

export default class Home extends Component {
    public render() : ReactNode {
        // return <div>Hola</div>
        return <SnakeComponent />
    }
}
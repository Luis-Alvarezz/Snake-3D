import "../styles/main.css"
import "../styles/menu.css"
import "../styles/panel.css"
import App from "next/app";
import { JSX } from "react"; // * para indicar el tipo de retorno de render

export default class MyApp extends App {
    render() : JSX.Element {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}
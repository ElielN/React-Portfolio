import { Header } from "../components/Header";

import homeBackground  from '../assets/images/home-background.jpg';
import '../styles/home.scss';

export function Home() {
    return(
        <div className="page-home">
            <img src={homeBackground} alt='Home background' />
            <Header />
            <div className="home-text">
                <p>Eliel Souza</p>
                <p>Desenvolvedor web na Doois Web</p>
                <p>Pentester apenas por hobby nas horas vagas</p>
            </div>
        </div>
    );
}
import { Header } from "../components/Header";

import homeBackground  from '../assets/images/home-background.jpg';
import '../styles/home.scss';

export function Home() {
    return(
        <div className="page-home">
            <img src={homeBackground} alt='Home background' />
            <Header currentPage="home"/>
            <div className="home-text">
                <h1>Eliel Souza</h1>
                <p>Desenvolvedor web na Doois Web</p>
            </div>
        </div>
    );
}
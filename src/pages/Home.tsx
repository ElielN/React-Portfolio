import { Header } from "../components/Header";

import homeBackground  from '../assets/images/home-background.jpg';
import '../styles/home.scss';
import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();

    function handleScroll() {
        window.console.log('Tentou')
        navigate('/about');
    } 

    return(
        <div className="page-home" onScroll={handleScroll}>
            <img src={homeBackground} alt='Home background' />
            <Header currentPage="home"/>
            <div className="home-text">
                <h1>Eliel Souza</h1>
                <p>Desenvolvedor web na Doois Web</p>
            </div>
        </div>
    );
}
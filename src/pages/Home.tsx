import { Header } from "../components/Header";
import Typewriter from 'typewriter-effect';
import '../styles/home.scss';

export function Home() {
    return(
        <div className="page-home">
            <Header currentPage="home"/>
            <div className="home-text">
                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    cursor: ''
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('<h1>Olá!</h1>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<h1>Eu sou <strong class="my-name">Eliel</strong></h1>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<h1>Sou desenvolvedor web</h1>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<h1>E este é o meu <strong class="portfolio">Portfólio</strong>!</h1>')
                    .pauseFor(500)
                    .deleteAll()
                    .start();
                }}
                />
            </div>
        </div>
    );
}
import { Header } from "../components/Header";

import githubImg from "../assets/images/githubImage.svg";

import "../styles/projects.scss";

export function Projects(){
    return (
        <div className="page-projects">
            <Header />
            <div className="content-projects">
                <aside>
                    <img src={githubImg} alt='Minha imagem' />
                </aside>
                <main className="content-text">
                    <h1>Projects</h1>
                    <p>
                        Você poderá conferir alguns de meus projetos clicando no botão logo abaixo
                        <br/>
                        Lá você encontrará:
                        <br/>
                        . Projetos em ReactJS, como este portfólio
                        <br/>
                        . Projetos mobile usando Flutter e Android Nativo
                        <br/>
                        . Projetos usando Python 
                    </p>
                    <button className="github-button">
                        GitHub
                    </button>
                </main>
            </div>
        </div>
    );
}
import { Header } from "../components/Header";

import githubImg from "../assets/images/githubImage.svg";

import "../styles/projects.scss";

function buttonRedirect() {
    window.open('https://github.com/ElielN', '_blank');
};

export function Projects(){
    return (
        <div className="page-projects">
            <Header currentPage="projects"/>
            <div className="content-projects">
                <aside>
                    <img src={githubImg} alt='Minha imagem' />
                </aside>
                <main className="content-text">
                    <h1>Projects</h1>
                    <p className="project-text">
                        Você poderá conferir alguns de meus projetos clicando no botão logo abaixo
                    </p>
                    <p className="project-text">
                        Lá você encontrará:
                    </p>
                    <p className="project-text">
                        &bull; Projetos em ReactJS, como este portfólio
                        <br/>
                        &bull; Projetos mobile usando Flutter e Android Nativo
                        <br/>
                        &bull; Projetos usando Python 
                    </p>
                    <button className="github-button" onClick={buttonRedirect}>
                        GitHub
                    </button>
                </main>
            </div>
        </div>
    );
}
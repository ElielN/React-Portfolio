import { Header } from "../components/Header";

import eliel from '../assets/images/eliel.jpeg';

import '../styles/about.scss';

export function About(){
    return (
        <div className="page-about">
            <Header currentPage="about"/>
            <div className="content-about">
                <aside>
                    <img src={eliel} alt='Minha imagem' />
                </aside>
                <main className="content-text">
                    <h1>About me!</h1>
                    <p className="about-text">
                        Estudante de Ciência da Computação pela Universidade Federal de Viçosa
                    </p>
                    <p className="about-text">
                        Atualmente sou estagiário na empresa Doois Web, onde estou trabalhando com front-end
                    </p>
                    <p className="about-text">
                        Sou apaixonado por tecnologia e estou sempre buscando aprender coisas novas
                    </p>
                    <p className="about-text">
                        Me interesso bastante pela área de segurança da informação e hoje levo como hobby nas horas vagas
                    </p>
                    <p className="about-text">
                        Minhas outras paixões são jogos online, esportes de luta e viagens
                    </p>
                </main>
            </div>
        </div>
    );
}
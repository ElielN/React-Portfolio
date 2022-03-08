import { Header } from "../components/Header";

import eliel from '../assets/images/eliel.jpeg';

import '../styles/about.scss';

export function About(){
    return (
        <div className="page-about">
            <Header />
            <div className="content-about">
                <aside>
                    <img src={eliel} alt='Minha imagem' />
                </aside>
                <main className="content-text">
                    <h1>About</h1>
                    <p>
                        Estudante de Ciência da Computação pela Universidade Federal de Viçosa
                        <br/>
                        Atualmente sou estagiário na empresa Doois Web, onde estou trabalhando com front-end
                        <br/>
                        Sou apaixonado por tecnologia e estou sempre buscando aprender coisas novas
                    </p>
                </main>
            </div>
        </div>
    );
}
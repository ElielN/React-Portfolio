import { Header } from "../components/Header";

import { motion } from 'framer-motion';

import eliel from '../assets/images/eliel.jpeg';

import '../styles/about.scss';

export function About(){

    const h1MotionVariants = {
        hidden: { x: 100, opacity: 0},
        visible: {
            x:0,
            opacity:1
        }
    };

    return (
        <div className="page-about">
            <Header currentPage="about"/>
            <div className="content-about">
                <aside>
                    <motion.img 
                    src={eliel} 
                    alt='Minha imagem'
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }} 
                    />
                </aside>
                <main className="content-text">
                    <motion.h1
                    variants={h1MotionVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8}}
                    >
                        About me!
                    </motion.h1>
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
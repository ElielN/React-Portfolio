import { Header } from "../components/Header";

import githubImg from "../assets/images/githubImage.svg";

import { motion } from 'framer-motion';

import "../styles/projects.scss";

function buttonRedirect() {
    window.open('https://github.com/ElielN', '_blank');
};

export function Projects(){

    const buttonMotionVariants = {
        hidden: { y: 100, opacity: 0},
        visible: {
            y:0,
            opacity:1
        }
    };

    const h1MotionVariants = {
        hidden: { y: -100, opacity: 0},
        visible: {
            y:0,
            opacity:1
        }
    };

    return (
        <div className="page-projects">
            <Header currentPage="projects"/>
            <div className="content-projects">
                <aside>
                    <motion.img 
                    src={githubImg} 
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
                        Projects
                    </motion.h1>
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
                    <motion.button 
                    className="github-button" 
                    onClick={buttonRedirect}
                    variants={buttonMotionVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2.5}}
                    >
                        GitHub
                    </motion.button>
                </main>
            </div>
        </div>
    );
}
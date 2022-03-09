import { motion } from 'framer-motion';

import './styles.scss';

type socialProps = {
    socialImg: string,
    socialAlt: string,
    handleRedirect: Function,
};


export function SocialMedia({socialImg, socialAlt, handleRedirect}: socialProps) {
    
    const container = {
        hidden: {
            //opacity: 1,
            //scale: 0
        },
        visible: {
            //opacity: 1,
            //scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0},
        visible: {
            y:0,
            opacity:1
        }
    };

    return(
        <motion.div 
        className="social"
        onClick={() => handleRedirect()}
        variants={container}
        initial="hidden"
        animate="visible"
        >
            <motion.img src={socialImg} alt={socialAlt} variants={item}/>
        </motion.div>
    );
};
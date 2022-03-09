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
                //duration: 1,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 150, opacity: 0},
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
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.8}
        }}
        whileTap={{ 
            scale: 0.4,
            rotate: 360
        }}
        >
            <motion.img src={socialImg} alt={socialAlt} variants={item} transition={{duration: 0.8}}/>
        </motion.div>
    );
};
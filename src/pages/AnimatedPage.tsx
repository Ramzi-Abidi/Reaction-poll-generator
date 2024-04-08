import { motion } from "framer-motion";
import { IAnimable } from "../utils/interfaces";

const animations: any = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -100,
    },
};

const AnimatedPage = ({ children }:any) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    );
};

export default AnimatedPage;

'use client'

//framer motion
import { motion } from "framer-motion";

// hooks
import useScrollProgress from "@/hooks/useScrollProgress";

// variants
const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
};

const template = ({ children }) => {
    const completion = useScrollProgress();

    return (
        <>
            <motion.main 
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
            >
                {children}
            </motion.main>

            <span
                style={{ height: `${completion}%` }}
                className="fixed z-50 bg-primary w-1 top-0 right-0 transition-all duration-300"
            ></span>

            <div className="h-[3500px]"></div>
        </>
    );
};


export default template
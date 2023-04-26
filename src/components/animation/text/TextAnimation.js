import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../helper/AnimatedText";
import InViewComponent from "../helper/InViewComponent";
export default function TextAnimation({ text }) {
    const [controls, setControls] = useState({ start: 'hidden' })
    const placeholderText = [
        {
            text: text
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    return (
        <InViewComponent onLoadInView={(controls) => setControls(controls)}>
            <motion.div
                animate={controls}
                initial="hidden"
                variants={container}
            >
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                })}
            </motion.div>
        </InViewComponent>
    );
}

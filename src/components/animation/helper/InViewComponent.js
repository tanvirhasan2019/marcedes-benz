import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function InViewComponent(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
            props.onLoadInView(controls);
        }
    }, [controls, inView]);
    return (
        <div ref={ref}>
            {props.children}
        </div>
    );
}

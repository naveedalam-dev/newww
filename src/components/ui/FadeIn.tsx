import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    className?: string;
    duration?: number;
}

export const FadeIn = ({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    className = "",
    duration = 0.5
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const getDirectionVariant = () => {
        switch (direction) {
            case "up": return { y: 30, x: 0 };
            case "down": return { y: -30, x: 0 };
            case "left": return { x: 30, y: 0 };
            case "right": return { x: -30, y: 0 };
            case "none": return { x: 0, y: 0 };
        }
    };

    return (
        <div ref={ref} className={`${fullWidth ? "w-full" : "w-auto"} ${className}`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...getDirectionVariant() },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: duration, ease: "easeOut", delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

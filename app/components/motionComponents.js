import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export function MotionH1({ children, style, ...props }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                width: "max-content",
                borderRightColor: "rgba(255,255,255,0)",
                transition: {
                    duration: 1,
                    ease: "easeOut"
                }
            })
        } else {
            console.log("not in view")
            animation.start({
                width: 0,
                borderRightColor: "rgba(255,255,255,.75)",
            })
        }
    }, [animation, inView])

    return (
        <motion.h1
            ref={ref}
            style={Object.assign(
                {}, style,
                {
                    whiteSpace: "nowrap",
                    padding: 0,
                    borderRight: "2px solid rgba(255,255,255,.75)",
                    overflow: "hidden",
                }
            )}
            initial={{ width: 0 }}
            animate={animation}
            {...props}
        >
            {children}
        </motion.h1>
    );
}

export function MotionP({ children, style, ...props }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    delay: .5,
                    duration: 1,
                    ease: "easeOut"
                }
            })
        } else {
            animation.start({
                opacity: 0,
            })
        }
    }, [animation, inView])

    return (
        <motion.p
            ref={ref}
            style={Object.assign(
                {}, style,
                {
                    opacity: 0,
                }
            )}
            initial={{ opacity: 0 }}
            animate={animation}
            {...props}
        >
            {children}
        </motion.p>
    );
}

export function MotionDiv({ children, style, delayInc=0, ...props }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    delay: .5 + delayInc,
                    duration: 1,
                    ease: "easeOut",
                    staggerChildren: .5,
                }
            })
        } else {
            animation.start({
                opacity: 0,
            })
        }
    }, [animation, inView, delayInc])

    return (
        <motion.div
            ref={ref}
            style={style}
            initial={{ opacity: 0 }}
            animate={animation}
            {...props}
        >
            {children}
        </motion.div>
    );
}
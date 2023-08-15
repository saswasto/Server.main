import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function RightVertConnector({ style }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                pathLength: 1.05,
                transition: {
                    duration: 4
                }
            })
        }
    }, [animation, inView])

    return (
        <div className="right" ref={ref} style={style}>
        <svg height="20vh" viewBox="0 0 4 26">
            <motion.path d = "M2 3A1 1 0 002 1 1 1 0 002 3L2 23C2 23 2 23 2 23A1 1 0 002 25 1 1 0 002 23"
                initial={{ pathLength: .05 }}
                animate={ animation }
            />
        </svg>
        </div>
    );
}
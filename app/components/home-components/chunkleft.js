import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function LeftChunk() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                transform: "translateX(0%)",
                transition: {
                    duration: 1
                }
            })
        }
    }, [animation, inView])

    return (
        <div ref={ref}>
            <motion.div initial={{transform: "translateX(100%)",}} animate={animation}>
                <div>
                    <h2>Software & Hardware</h2>
                    <p>The architects of electronics, linking & programming the components, communicators, circuits</p>
                </div>
                <div>
                    <h2>Recovery</h2>
                    <p>The safety ensurers of the CanSat, prepares the vessle for its fall from 1km high with minimal harm</p>
                </div>
            </motion.div>
        </div>
    );
}
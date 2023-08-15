import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function RightChunk() {
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
            <motion.div initial={{transform:"translateX(-100%)"}} animate={animation}>
                <div>
                    <h2>Body Design</h2>
                    <p>The creators for the protective shell of the mission&apos;s pieces, takes on the task of protecting all within</p>
                </div>
                <div>
                    <h2>Public Relations</h2>
                    <p>Documenting the process of creation, share the fruits of innovation with the world</p>
                </div>
            </motion.div>
        </div>
    );
}
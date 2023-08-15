import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function GradientH1(props) {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                backgroundPosition:"0% center",
                transition: {
                    duration: 1
                }
            })
        }
    }, [animation, inView])

    const styl = Object.assign({},
        props.style,
        {
            backgroundSize:"200% 100%",
            backgroundClip:"text",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
            backgroundPosition:"100% center"
        }
    )

    return (
        <motion.h1 
            ref={ref}
            initial={{}}
            animate={ animation }
            style={ styl }
        >
            {props.children}
        </motion.h1>
    );
}
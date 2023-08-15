import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function CanSat() {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.y -= 0.001))
    
    const model = useLoader(GLTFLoader, "/models/inertiaSat.glb")

    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            scale={[4, 1, 1]}
        >
            <primitive object={model.scene} scale={5} position={[0, -1, 0]} rotation={[-0.2, 0, 0]} />
        </mesh>
    )
}

export default function AAER_Model({style}) {
    return (
        <Canvas style={style}>
            <ambientLight/>
            <pointLight position={[10, 10, 10]} />
            <CanSat />
        </Canvas>
    )
}
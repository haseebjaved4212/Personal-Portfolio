
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
    const { scene } = useGLTF('/models/react.glb');

    return (
        <Float floatIntensity={1}>
            <group scale={0.5} {...props} dispose={null}>
                <primitive object={scene} />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;

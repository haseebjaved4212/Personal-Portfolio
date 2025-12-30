
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
    const { scene } = useGLTF('/models/cube.glb');
    const texture = useTexture('/textures/cube.png');

    // Traverse the scene to apply the texture if needed, or simply rely on the model's UVs + texture
    // But usually, if a texture is provided separately, we might want to apply it.
    // For now, let's just render the scene as is, assuming the GLB is set up correctly, 
    // or apply the texture to all meshes.

    if (scene) {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = texture;
                child.material.needsUpdate = true;
            }
        });
    }

    return (
        <Float floatIntensity={2}>
            <group rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
                <primitive object={scene} />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/cube.glb');

export default Cube;

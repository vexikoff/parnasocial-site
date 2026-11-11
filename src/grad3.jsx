import FluxLines from "./component/FluxLines.jsx";

export default function Grad3() {
    return (
        <FluxLines
            colors={["#009aff","#70c7ff","#cfecff"]}
            glow={2.05}
            rimWidth={0.16}
            lineWidth={3}
            flowDirection="up"
            mouseInteraction
            clickSwirl
            speed={0.1}
            scale={0.95}
            turbulence={0.5}
            fluidity={0.06}
            sharpness={6}
            shimmer={1.5}
            mouseStrength={0.4}
            mouseRadius={0.42}
            intro
            lightMode
        />
    );
}

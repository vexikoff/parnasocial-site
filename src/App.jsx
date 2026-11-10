import Beams from "./component/Beams.jsx";
import "./component/Beams.css";

export default function App() {
    return (
        <>
            <Beams
                color="#009dff"
                beamWidth={128}
                rotation={30}
                speed={1.15}
                glow={0.85}
                waveLength={389}
                depth={1.2}
                sharpness={0.6}
                twist={0}
                fillLight={0.3}
                brightness={1.6}
                grain={0.95}
                variation={8}
                mouseInteraction
                mouseStrength={1.25}
                fade={0}
                opacity={0.25}
                intro
                lightMode
            />
        </>
    );
}
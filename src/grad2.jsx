import FaultyTerminal from "./component/FaultyTerminal.jsx";

export default function Grad2() {
    return (
        <FaultyTerminal
            tint="#009aff"
            glyphs="blocks"
            scale={1}
            digitSize={1.2}
            timeScale={0.25}
            brightness={0.2}
            glow={1.5}
            persistence={0.5}
            mouseStrength={0.1}
            mouseGlow={0.25}
            curvature={0.24}
            vignette={0.46}
            clickEffect="glitch"
            scramble={0.5}
            scanlineIntensity={0.25}
            glitchAmount={2.5}
            flickerAmount={1.3}
            noiseAmp={0.9}
            chromaticAberration={1.1}
            mouseReact
            pageLoadAnimation
            pause={false}
            lightMode
            style={{ height: "100vh" }}
        />
    );
}

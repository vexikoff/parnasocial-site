import GradientBlinds from "./component/GradientBlinds.jsx";

export default function App2() {
    return (
        <div className="mcc" style={{width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden'}}>
            <GradientBlinds
                style={{position: 'absolute', inset: 0, opacity: 0.3}}
                gradientColors={["#009aff", "#0094ff"]}
                angle={20}
                blindCount={24}
                blindMinWidth={50}
                spotlightRadius={0.5}
                shine={0.4}
                relief={0.5}
                glow={1}
                sway={0.35}
                hoverTilt={0.6}
                clickEffect="ripple"
                noise={0.6}
                spotlightSoftness={1}
                spotlightOpacity={0.5}
                shineDirection="left"
                lightColor="#ffffff"
                speed={3}
                perspective={0}
                gradientSpeed={3.9}
                distortAmount={1}
                mirrorGradient
                mouseDampening={0.69}
                idle="drift"
                intro
                lightMode
            />
            <div className="column">
                <p>Pages:</p>
                <a href="https://parnasocial.vexikoff.xyz/">Home</a>
                <a href="https://parnasocial.vexikoff.xyz/web">Try in web</a>
                <a href="https://github.com/vexikoff/parnasocial/releases">Download for Windows</a>
                <a href="https://github.com/vexikoff/parnasocial-mac-linux/releases">Download for Mac/Linux</a>
            </div>
            <div className="spacer"/>
            <div className="column">
                <p>Sources:</p>
                <a href="https://github.com/vexikoff/parnasocial-site">Site</a>
                <a href="https://github.com/vexikoff/parnasocial">Windows</a>
                <a href="https://github.com/vexikoff/parnasocial-mac-linux">Mac/Linux</a>
                <p>MIT License</p>
            </div>
            <div className="spacer"/>
            <div className="column">
                <p>Developers:</p>
                <a href="https://github.com/vexikoff">vexikoff</a>
                <a href="https://qwen.ai/">Qwen</a>
                <a href="https://github.com/features/copilot">Github Copilot</a>
                <p>All rights reserved 2026</p>
            </div>
        </div>
    )
}
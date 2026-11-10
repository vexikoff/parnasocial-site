import GradientBlinds from "./component/GradientBlinds.jsx";

export default function App2() {
    return (
        <div style={{width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden'}}>
            <GradientBlinds
                style={{position: 'absolute', inset: 0}}
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
            <p style={{position: 'absolute', bottom: 0, left: 0, margin: 0}}>vexikoff all right reserved 2026</p>
        </div>
    )
}
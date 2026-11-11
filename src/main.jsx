import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./footerbg.jsx";
import Grad2 from "./grad2.jsx";
import Grad3 from "./grad3.jsx";

document.body.style.display = "flex";
document.body.style.flexDirection = "column";

createRoot(document.querySelector(".grad")).render(<App />);
createRoot(document.querySelector(".grad2")).render(<Grad2 />);
createRoot(document.querySelector(".grad3")).render(<Grad3 />);
const footer = document.querySelector(".footer");
createRoot(footer).render(<App2 />);
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./footerbg.jsx";

createRoot(document.querySelector(".grad")).render(<App />);
const footer = document.querySelector(".footer");
createRoot(footer).render(<App2 />);
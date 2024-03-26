import { render } from "hono/jsx/dom";
import App from "./App.tsx";

const root = document.getElementById("root") as HTMLElement;
render(<App />, root);

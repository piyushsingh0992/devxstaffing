import React from "react";
import ReactDOMClient from "react-dom/client";
import { ListView } from "./screens/ListView";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ListView />);

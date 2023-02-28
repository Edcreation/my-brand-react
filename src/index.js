import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);




root.render(
    <>
        <App />
    </>
)
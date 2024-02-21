import Home from "./pages/home";
import Editor from "./pages/editor";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./assets/style.css";
import Navbar from "./components/navbar";

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/editor" element={<Editor />} />
                    {/* Other pages */}
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;

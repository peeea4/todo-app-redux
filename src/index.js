import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "@/globalStyles";
import { store } from "@/store";

import { AppContainer } from "./components/Class/containers/AppContainer";
import { App } from "./components/FC/App";
import { Home } from "./pages/FC/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/class" element={<AppContainer />} />
                    <Route path="/func" element={<App />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

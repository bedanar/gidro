import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { ProductsPage } from "./components/ProductsPage";
import App from "./App";

export default function RouterView () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<MainPage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
            </Routes>
        </Router>
    )
}
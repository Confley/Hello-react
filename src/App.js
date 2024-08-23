import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./Layout";
import Test from "./components/Test";

const routes = [
  { path: "test", element: <Test /> },
];

// Define las rutas que no tendrán el diseño pre-definido
export const noLayoutRoute = ["/test"];

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

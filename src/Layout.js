import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { noLayoutRoute } from "./App";
// import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {!noLayoutRoute.includes(location.pathname) ? (
        <>
          <Nav />
          <main className="main">
            <Outlet/>
          </main>
          {/* <Footer /> */}
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;

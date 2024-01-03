"use client";
import "../globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import React from "react";
import Header from "../components/admin/Header";
import Aside from "../components/admin/Aside";

function AdminLayout({ children }) {
  return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="" />
          <title>Dashboard Template · OSTESA</title>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .bd-placeholder-img {\n font-size: 1.125rem;\n text-anchor: middle;\n -webkit-user-select: none;\n  -moz-user-select: none;\n -ms-user-select: none;\n user-select: none;\n }\n\n @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    ",
            }}
          />
          {/* Custom styles for this template */}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "/* Chart.js */\n@-webkit-keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}@keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}",
            }}
          />
        </head>
        <body>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Aside />
              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 mt-3"
              >
                  {children}
              </main>
            </div>
          </div>
        </body>
      </html>
  );
}

export default AdminLayout;

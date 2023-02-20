import React, { FunctionComponent } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FunctionComponent<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recreation Dashboard</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="dashboard for keeping seniors active and engaged"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Header />
      <div className="overflow-y-auto">
        <div className="w-full h-screen max-w-screen-xl px-0 mx-auto ">
          <div className="py-2 md:flex-col md:px-5 md:relative">
            <main className="mt-[10px] font-metropolis">{children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Layout;

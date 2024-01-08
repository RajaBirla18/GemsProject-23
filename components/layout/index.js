import React from "react";
import HeaderPage from "./header/header";
import FooterPage from "./footer/footer";

function LayoutPage({ children }) {
  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  );
}

export default LayoutPage;
import React  from "react";
import Footer from "./footer/footer";
import Header from "./header/header";


const LayoutPage = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LayoutPage;
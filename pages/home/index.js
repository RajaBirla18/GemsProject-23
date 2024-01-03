import React from "react";
import LandingPage from "@/components/landingPage";
import LayoutPage from "@/components/layout";

const Home = () => {
  return (
    <center>
      <LandingPage />
    </center>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>
}

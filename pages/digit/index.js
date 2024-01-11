import SumPage from "@/components/sumPage";
import LayoutPage from "@/components/layout";
import React from "react";

const Digit = () => {
  return <SumPage page="DigitVal" />;
};

Digit.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Digit;
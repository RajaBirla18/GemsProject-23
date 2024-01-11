import SumPage from "@/components/sumPage";
import LayoutPage from "@/components/layout";
import React from "react";

const Sum = () => {
  return <SumPage page="SumVal" />;
};

Sum.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Sum;
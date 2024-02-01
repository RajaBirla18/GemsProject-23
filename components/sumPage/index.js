import { increment, decrement } from "@/reducers/sumSlice";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SumPage = ({ page }) => {
  const allData = useSelector((state) => state.sumRedu);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log("===Sum Page user data=====", users);

  // const handleClick = (num) => {
  //   dispatch(increment());
  // };
  // const handleClick = (num) => {
  //   dispatch(decrement());
  // };

  return (
    <center style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Button onClick={() => dispatch(decrement())}> - </Button>
      <h2>
        {page} :: {allData.sumData}
      </h2>
      <Button onClick={() => dispatch(increment())}> + </Button>

    </center>
  );
};

export default SumPage;

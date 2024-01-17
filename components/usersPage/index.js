// import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./user";
import { loadData } from "@/reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import MyPagination from "./myPagination";

function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch();
  const userObj = useSelector((state) => state.users);

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: 1,
        },
      })
      .then(function (res) {
        console.log("===res.data===", res.data);
        dispatch(loadData(res.data));
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <section className="user-list my-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>User List</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quae dolore dolores doloribus tempore velit excepturi
              exercitationem!
            </p>
          </div>
          <div className="col">
            <div className="candidate-list">
              {userObj.data.map((userData) => {
                return <User key={userData.id} data={userData} />;
              })}
            </div>
          </div>
        </div>
        <MyPagination
          totalPages={userObj.totalPages}
          currentPage={userObj.currentPage}
        />
      </div>
    </section>
  );
}

export default UsersPage;
import { db } from "../Firebase";
import React, { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import "./Stadiums.css";
import { useNavigate } from "react-router-dom";
import { Row } from "./Stadiums";

export default function Users() {
  const [data, setData] = useState([]);
  // const handleDelete = (id) => {
  //   remove(ref(db, `/stadiums/${id}`));
  // };
  useEffect(() => {
    onValue(ref(db, "/users"), (snapshot) => {
      const data = Object.entries(snapshot.val()).map(([key, value]) => ({
        ...value,
        id: key,
      }));
      setData(data);
    });
  }, []);
  console.log(data);
  let navigate = useNavigate();
  const goHome = () => {
    navigate("StadiumDetails");
  };
  const [stad, setStad] = useState("");
  const handleSearchQueryChange = (event) => {
    setStad(event.target.value);
  };
  const filteredData = data.filter((item) => {
    return (
      item.email.toLowerCase().includes(stad.toLowerCase()) ||
      item.fname.toLowerCase().includes(stad.toLowerCase()) ||
      item.phone.toLowerCase().includes(stad.toLowerCase())
    );
  });

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (confirmed) {
      remove(ref(db, `users/${id}`));
      alert("The user has been deleted successfully!");
    }
  };
  return (
    <div
      className="stadiumsContainer"
      style={
        {
          // display: "grid",
          // gridTemplateColumns: "repeat(3, 1fr)",
          // gridGap: "50px",
          // marginRight: "350px",
          // marginTop: "20px",
          // marginBottom: "20px",
          // display: "flex",
          // justifyContent: "space-evenly",
          // alignItems: "center",
        }
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* <Link
          to={"AddStadium"}
          className="waves-effect waves-light btn"
          style={{
            // backgroundColor: "#8A7B7B",
            // marginRight: 10
            textDecoration: "none",
            color: "#053857",
          }}
        >
          Add a stadium
        </Link> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Search</p>
          <input
            style={{ height: 20, marginTop: 17, marginLeft: 7 }}
            placeholder="search"
            placeholderTextColor="#C5BBAE"
            value={stad}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      {/* <NavBar /> */}
      {filteredData.map((item) => {
        return (
          <Row
            item={item}
            labels={[item.fname, item.email, item.city, item.phone]}
            handleDelete={handleDelete}
            route={"/UserDetails/"}
          />
        );
      })}
    </div>
  );
}

import { db } from "../Firebase";
import React, { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import "./Reservations.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Row } from "./Stadiums";

export default function Reservations() {
  const [data, setData] = useState([]);
  // const handleDelete = (id) => {
  //   remove(ref(db, `/stadiums/${id}`));
  // };
  useEffect(() => {
    onValue(ref(db, "/reservations"), (snapshot) => {
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
    return item.email.toLowerCase().includes(stad.toLowerCase());
  });

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (confirmed) {
      remove(ref(db, `reservations/${id}`));
      alert("The reservation has been deleted successfully!");
      navigate("/Reservations");
    }
  };

  return (
    <div
      className="ReservationsContainer"
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
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "60%",
                border: "2px solid #053857",
                alignItems: "center",
                backgroundColor: "#053857",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3>{item.email}</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h4>{item.timeSlot} </h4>
              </div>

              <h5>{item.date} </h5>

              <div>
                {" "}
                <Link
                  key={item.id}
                  to={"ReservationDetails/" + item.id}
                  className="waves-effect waves-light btn"
                  style={{
                    // backgroundColor: "#8A7B7B",
                    // marginRight: 10
                    textDecoration: "none",
                    color: "white",
                    marginRight: 10,
                  }}
                >
                  <FiEdit2 size={25} />
                </Link>
                <AiFillDelete onClick={() => handleDelete(item.id)} size={25} />
              </div>
            </div>
          </div>
        );
      })}

      {/* {data.map((item) => {
        return (
          <Row
            item={item}
            labels={[item.email, item.timeSlot, item.date, item.stadiumName]}
            handleDelete={handleDelete}
            route={"Reservations/ReservationDetails/"}
          />
        );
      })} */}
    </div>
  );
}

{
  /* <div
          className="stadium"
          style={{
            height: 450,
            width: 400,
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div key={item.id} style={{}}>
            <img
              src="https://i.imgur.com/PftUxLp.jpg"
              alt={item.name}
              key={item.id}
              style={{
                width: "400px",
                height: "250px",
                margin: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            />
            <h3
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FC7F00",
                color: "#053857",
                textAlign: "center",
                marginBottom: 0,
                height: 50,
              }}
            >
              {item.name}
            </h3>
          </div>

          <div key={item.id}>
            <div
              key={item.id}
              style={{
                display: "flex",
                fontSize: 15,
                justifyContent: "space-between",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <p
                  key={item.id}
                  style={{
                    margin: 0,
                  }}
                >
                  {item.City}, {item.location}
                  {"    "}
                </p>
              </div>
              {/* <p key={item.id} style={{ margin: 0 }}>
               
              </p> */
}

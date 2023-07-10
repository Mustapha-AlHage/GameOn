import { db } from "../Firebase";
import React, { useState, useEffect } from "react";
import { set, ref, onValue, remove } from "firebase/database";
import "./Stadiums.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

export default function Stadiums() {
  const [data, setData] = useState([]);

  // const handleDelete = (id) => {
  //   remove(ref(db, `/stadiums/${id}`));
  // };
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this stadium?"
    );

    if (confirmed) {
      remove(ref(db, `stadiums/${id}`));
      alert("The stadium has been deleted successfully!");
    }
  };
  useEffect(() => {
    onValue(ref(db, "/stadiums"), (snapshot) => {
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
    return item.name.toLowerCase().includes(stad.toLowerCase());
  });
  console.log(stad);
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
        <Link
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
        </Link>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <input
            style={{ height: 20, marginTop: 17, marginLeft: 7 }}
            placeholder="search"
            placeholderTextColor="#C5BBAE"
            value={stad}
            onChangeText={setStad}
          /> */}
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
            route={"StadiumDetails/"}
            labels={[item.name, `${item.City}, ${item.location}`, item.phone]}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export const Row = (props) => {
  const { item, labels, handleDelete, route } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        margin: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          border: "2px solid #053857",
          borderRadius: 5,
          alignItems: "center",
          backgroundColor: "#053857",
          color: "white",
        }}
      >
        {labels?.map((i, index) => (
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index == 0 ? <h3>{i}</h3> : <h4>{i}</h4>}
          </div>
        ))}

        <div
          style={{
            display: "flex",
            flex: 0.2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            key={item.id}
            to={route + item.id}
            className="waves-effect waves-light btn"
            style={{
              // backgroundColor: "#8A7B7B",
              // marginRight: 10
              textDecoration: "none",
              color: "white",
            }}
          >
            <FiEdit2 size={25} />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillDelete onClick={() => handleDelete(item.id)} size={25} />
        </div>
      </div>
    </div>
  );
};

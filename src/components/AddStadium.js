import React, { useState } from "react";
import { db } from "../Firebase";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import "./AddStadiums.css";

export default function AddStadium() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [description, setDescription] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [price, setPrice] = useState(1);
  const [ac, setAc] = useState("");
  const [room, setRoom] = useState("");
  const [parking, setParking] = useState("");
  const [gason, setGason] = useState("");
  const [sport, setSport] = useState("");
  const [phone, setPhone] = useState(0);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };
  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleAcChange = (e) => {
    setAc(e.target.value);
  };
  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };
  const handleParkingChange = (e) => {
    setParking(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.target.value);
  };
  const handleGasonChange = (e) => {
    setGason(e.target.value);
  };
  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/stadiums/${uuid}`), {
      name: name,
      location: street,
      sportType: sport,
      price: price,
      phone: phone,
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
      City: city,
      image: image,
      description: description,
      features: {
        AC: ac,
        changingRooms: room,
        parking: parking,
        gason: gason,
      },
      id: uuid,
      rating: rating,
    });
    setName("");
    setCity("");
    setStreet("");
    setDescription("");
    setParking("");
    setAc("");
    setRoom("");
    setGason("");
    setSport("");
    setPrice(1);
    setLatitude(0);
    setLongitude(0);
    setRating(0);
    alert("Stadium has been added successfully!");
    console.log("stadiums has been added successfully!");
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this stadium?"
    );

    if (confirmed) {
      remove(ref(db, `stadiums/${id}`));
      alert("The stadium has been deleted successfully!");
    }
  };

  return (
    <div className="updateContainer">
      <div
        style={{
          display: "flex",
          // backgroundColor: "#053857",
          justifyContent: "center",
          height: 642,
        }}
      >
        {/* <h4
          style={{
            backgroundColor: "#f9932d",
            color: "white",
            height: "30px",
            display: "flex",
            alignItems: "center",
            borderRadius: "20PX",
            padding: "7PX",
          }}
        >
          Stadium information
        </h4> */}
        <div
          className="container"
          style={{
            width: 600,
            height: 600,
            backgroundColor: "white",
            marginTop: 20,
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Add Stadium</h2>

            {/* <AiFillDelete
              onClick={handleDelete}
              size={25}
              style={{ marginTop: 25, marginLeft: 15 }}
            /> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Name</h2>

            {/* <p>name</p> */}
            <input
              // placeholder={name}
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>City</h2>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 70 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>street</h2>
            <input
              type="text"
              value={street}
              onChange={handleStreetChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Phone</h2>
            <input
              type="number"
              onChange={handlephoneChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 40 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>sport</h2>
            <input
              type="text"
              onChange={handleSportChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 55 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Features:</h2>
            {/* <p>feature 1</p> */}
            <input
              type="text"
              value={ac}
              onChange={handleAcChange}
              style={{
                width: 300,
                height: 50,
                marginTop: 20,
                marginLeft: 15,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <input
              type="text"
              value={room}
              onChange={handleRoomChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 115 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <input
              type="text"
              value={parking}
              onChange={handleParkingChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 115 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <input
              type="text"
              value={gason}
              onChange={handleGasonChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 115 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Map:</h2>
            <input
              type="text"
              placeholder="Longitude"
              // value={longitude}
              onChange={handleLongitudeChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 52 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            {/* <h2>Latitude</h2> */}
            <input
              placeholder="Latitude"
              // value={latitude}
              onChange={handleLatitudeChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 110 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Price</h2>
            <input
              type="number"
              onChange={handlePriceChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>Rating</h2>
            <input
              type="number"
              onChange={handleRatingChange}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 32 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginRight: 20 }}>Image URI</h2>
            <input
              type="text"
              onChange={handleImageChange}
              style={{ width: 300, height: 50, marginTop: 20, marginRight: 30 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: 20,
              marginTop: 20,
              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginRight: 7 }}>Description</h2>
            <textarea
              cols="40"
              rows="8"
              style={{ resize: "none" }}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <button
              className="submit"
              onClick={writeToDatabase}
              style={{ margin: 20 }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: 30,
          flexDirection: "row",
        }}
      > */}
      {/* <h4>features</h4>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>AC</p>
          <input
            type="text"
            value={ac}
            onChange={handleAcChange}
            style={{ height: 50 }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>changing Rooms</p>
            <input
              type="text"
              value={room}
              onChange={handleRoomChange}
              style={{ height: 50 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Parking</p>
            <input
              type="text"
              value={parking}
              onChange={handleParkingChange}
              style={{ height: 50 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Gason</p>
            <input
              type="text"
              value={gason}
              onChange={handleGasonChange}
              style={{ height: 50 }}
            />
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: 30,
            }}
          >
            <h4>Map</h4>
            <div style={{ display: "flex" }}>
              <p>Longitude</p>
              <input
                type="text"
                value={longitude}
                onChange={handleLongitudeChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <p>Latitude</p>
              <input
                type="text"
                value={latitude}
                onChange={handleLatitudeChange}
              />
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div style={{ display: "flex" }}>
        <p>Price ($)</p>
        <input type="text" value={price} onChange={handlePriceChange} />
      </div>
      <div style={{ display: "flex" }}>
        <p>Image src</p>
        <input type="text" />
      </div>  */}

      {/* <input
        type="text"
        value={name}
        style={{ width: 200 }}
        onChange={handleNameChange}
      /> */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Description</p>
        <textarea
          type=""
          value={description}
          onChange={handleDescriptionChange}
        /> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* </div>
      <button onClick={writeToDatabase}>Submit</button> */}
    </div>
  );
}

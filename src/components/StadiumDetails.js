import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { ref, onValue, update, remove } from "firebase/database";
import "./StadiumDetails.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function StadiumDetails() {
  const { id } = useParams();

  const [stadium, setStadium] = useState([]);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState(0);
  const [sport, setSport] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [edit, setEdit] = useState(true);
  const handleEdit = () => {
    setEdit(!edit);
  };
  // const handleDelete = () => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this stadium?"
  //   );

  //   if (confirmed) {
  //     remove(ref(db, `stadiums/${id}`));
  //     alert("The stadium has been deleted successfully!");
  //   }
  // };

  useEffect(() => {
    onValue(ref(db, `/stadiums/${id}`), (snapshot) => {
      setStadium(snapshot.val());
      setName(snapshot.val().name);
      setCity(snapshot.val().City);
      setStreet(snapshot.val().location);
      setSport(snapshot.val().sportType);
      setPrice(snapshot.val().price);
      setDescription(snapshot.val().description);
      setLongitude(snapshot.val().longitude);
      setLatitude(snapshot.val().latitude);
      setPhone(snapshot.val().phone);
      setFeature1(snapshot.val().features.AC);
      setFeature2(snapshot.val().features.changingRooms);
      setFeature3(snapshot.val().features.gason);
      setFeature4(snapshot.val().features.parking);
      setRating(snapshot.val().rating);
      setImage(snapshot.val().image);
    });
  }, [id]);
  console.log(stadium);
  const updateData = () => {
    update(ref(db, `stadiums/${id}`), {
      name: name,
      City: city,
      location: street,
      sportType: sport,
      price: price,
      phone: phone,
      description: description,
      longitude: longitude,
      latitude: latitude,
      rating: rating,
      image: image,
      features: {
        AC: feature1,
        changingRooms: feature2,
        gason: feature3,
        parking: feature4,
      },
    });
    alert("data has been updated successfully!");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleSportChange = (e) => {
    setSport(e.target.value);
  };
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    const newPriceIsValid = /^[0-9]+$/.test(newPrice);

    if (newPriceIsValid) {
      setPrice(newPrice);
    } else {
      alert("Please enter a numerical value.");
    }
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
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleFeature1Change = (e) => {
    setFeature1(e.target.value);
  };
  const handleFeature2Change = (e) => {
    setFeature2(e.target.value);
  };
  const handleFeature3Change = (e) => {
    setFeature3(e.target.value);
  };
  const handleFeature4Change = (e) => {
    setFeature4(e.target.value);
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
            <h2 style={{ textAlign: "center" }}>Stadium Details</h2>
            <div>
              <AiTwotoneEdit
                onClick={handleEdit}
                size={25}
                style={{ marginTop: 25 }}
              />
              {/* <AiFillDelete
                onClick={handleDelete}
                size={25}
                style={{ marginTop: 25, marginLeft: 15 }}
              /> */}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2>name</h2>
            <input
              placeholder={name}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
              value={name}
              onChange={handleNameChange}
              disabled={edit}
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
              placeholder={stadium.City}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 65 }}
              disabled={edit}
              value={city}
              onChange={handleCityChange}
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
            <h2>Street</h2>
            <input
              placeholder={stadium.location}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
              disabled={edit}
              value={street}
              onChange={handleStreetChange}
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
              placeholder={stadium.phone}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
              disabled={edit}
              value={phone}
              onChange={handlePhoneChange}
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
            <h2>Sport</h2>
            <input
              placeholder={stadium.sportType}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 56 }}
              disabled={edit}
              value={sport}
              onChange={handleSportChange}
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
            <h2 style={{ marginLeft: 55 }}>Features</h2>
            <div>
              <input
                placeholder={feature1}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={feature1}
                onChange={handleFeature1Change}
              />
              <input
                placeholder={feature2}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={feature2}
                onChange={handleFeature2Change}
              />
              <input
                placeholder={feature3}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={feature3}
                onChange={handleFeature3Change}
              />
              <input
                placeholder={feature4}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={feature4}
                onChange={handleFeature4Change}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginLeft: 100 }}>Map</h2>
            <div style={{}}>
              <input
                placeholder={"longitude: " + stadium.longitude}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={longitude}
                onChange={handleLongitudeChange}
              />
              <input
                placeholder={"latitude: " + stadium.latitude}
                style={{
                  width: 300,
                  height: 50,
                  marginTop: 20,
                  marginLeft: 50,
                }}
                disabled={edit}
                value={latitude}
                onChange={handleLatitudeChange}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              marginBottom: 20,
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginLeft: 30 }}>Price</h2>
            <input
              type="number"
              placeholder={stadium.price + "$"}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 40 }}
              disabled={edit}
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              marginBottom: 20,
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginLeft: 30 }}>Rating</h2>
            <input
              type="number"
              placeholder={stadium.rating}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 20 }}
              disabled={edit}
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              marginBottom: 20,
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{}}>Image URI</h2>
            <input
              type="text"
              placeholder={stadium.image}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 10 }}
              disabled={edit}
              value={image}
              onChange={handleImageChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              marginRight: 20,
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginLeft: 20, marginRight: 10 }}>Description</h2>
            <textarea
              style={{ marginLeft: 0 }}
              cols="40"
              rows="8"
              disabled={edit}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          {/* <button onClick={handleEdit}>edit</button> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="button-5"
              style={{ margin: 20 }}
              onClick={updateData}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

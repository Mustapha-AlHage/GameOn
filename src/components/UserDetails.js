import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { ref, onValue, update, remove } from "firebase/database";
import "./ReservationDetails.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function UserDetails() {
  const { id } = useParams();

  const [reservation, setReservation] = useState([]);

  const [fname, setFname] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [DOB, setDOB] = useState("");

  const [edit, setEdit] = useState(true);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (confirmed) {
      remove(ref(db, `users/${id}`));
      alert("The user has been deleted successfully!");
    }
  };

  useEffect(() => {
    onValue(ref(db, `/users/${id}`), (snapshot) => {
      setReservation(snapshot.val());
      setFname(snapshot.val().fname);
      setEmail(snapshot.val().email);
      setPhone(snapshot.val().phone);
      setCity(snapshot.val().city);
      setDOB(snapshot.val().DOB);
      setStreet(snapshot.val().street);
      setImage(snapshot.val().avatar);
      //  setUserName(snapshot.val().userName);
      console.log(snapshot.val());
    });
  }, [id]);

  const updateData = () => {
    update(ref(db, `users/${id}`), {
      fname: fname,
      email: email,
      phone: phone,
      avatar: image,
      city: city,
      street: street,
      DOB: DOB,
    });
    alert("data has been updated successfully!");
  };
  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlecityChange = (e) => {
    setCity(e.target.value);
  };
  const handlestreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  console.log(fname);
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
            <h2 style={{ textAlign: "center" }}>User Details</h2>
            <div>
              <AiTwotoneEdit
                onClick={handleEdit}
                size={25}
                style={{ marginTop: 25 }}
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
            <h2>Fullname</h2>
            <input
              placeholder={fname}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
              value={fname}
              onChange={handleFnameChange}
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
            <h2>Email</h2>
            <input
              placeholder={email}
              style={{
                width: 300,
                height: 50,
                // margin: 20,
                // marginleft: 250,
                marginLeft: 90,
                marginTop: 20,
              }}
              disabled={edit}
              value={email}
              onChange={handleEmailChange}
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
            <h2 style={{}}>City</h2>
            <input
              placeholder={city}
              style={{
                width: 300,
                height: 50,
                // marginTop: 20,
                // marginLeft: 110,
                marginLeft: 105,
                marginTop: 20,
              }}
              disabled={edit}
              value={city}
              onChange={handlecityChange}
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
              placeholder={street}
              style={{
                width: 300,
                height: 50,
                // margin: 20,
                // marginleft: 130,
                marginLeft: 85,

                marginTop: 20,
              }}
              disabled={edit}
              value={street}
              onChange={handlestreetChange}
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
            <h2 style={{ marginLeft: -10, marginRight: 10 }}>Date of birth</h2>
            <input
              placeholder={DOB}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 7 }}
              disabled={edit}
              value={DOB}
              onChange={handleDOBChange}
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
              placeholder={phone}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 80 }}
              disabled={edit}
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              // justifyContent: "space-around",
            }}
          >
            <h2 style={{ marginLeft: -10, marginRight: 10 }}>Image URI</h2>
            <input
              placeholder={image}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 7 }}
              disabled={edit}
              value={image}
              onChange={handleImageChange}
            />
          </div> */}

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

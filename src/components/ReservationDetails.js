import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../Firebase";
import { ref, onValue, update, remove } from "firebase/database";
import "./ReservationDetails.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function ReservationDetails() {
  const { id } = useParams();

  const [reservation, setReservation] = useState([]);

  const [date, setDate] = useState("");

  const [timeSlot, setTimeSlot] = useState("");
  const [email, setEmail] = useState("");
  const [stadiumName, setStadiumName] = useState(1);
  const [price, setPrice] = useState(0);

  const [edit, setEdit] = useState(true);
  const handleEdit = () => {
    setEdit(!edit);
  };
  let navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (confirmed) {
      remove(ref(db, `reservations/${id}`));
      alert("The reservation has been deleted successfully!");
      navigate("/Reservations");
    }
  };

  useEffect(() => {
    onValue(ref(db, `/reservations/${id}`), (snapshot) => {
      setReservation(snapshot.val());
      setDate(snapshot.val().date);
      setTimeSlot(snapshot.val().timeSlot);
      setEmail(snapshot.val().email);
      setStadiumName(snapshot.val().stadiumName);
      setPrice(snapshot.val().price);
      console.log(snapshot.val().price);
    });
  }, [id]);

  const updateData = () => {
    update(ref(db, `users/${id}`), {
      date: date,
      timeSlot: timeSlot,
      email: email,
      stadiumName: stadiumName,
      price: price,
    });
    alert("data has been updated successfully!");
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleStadiumNameChange = (e) => {
    setStadiumName(e.target.value);
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

  console.log(date);

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
            <h2 style={{ textAlign: "center" }}>Reservation Details</h2>
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
            <h2>Date</h2>
            <input
              placeholder={date}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
              value={date}
              onChange={handleDateChange}
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
            <h2 style={{ marginLeft: -10, marginRight: 10 }}>Time</h2>
            <input
              placeholder={timeSlot}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 48 }}
              disabled={edit}
              value={timeSlot}
              onChange={handleTimeSlotChange}
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
            <h2 style={{ marginLeft: -10, marginRight: 10 }}>Email</h2>
            <input
              placeholder={email}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 43 }}
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
            <h2 style={{ marginRight: 15 }}>Stadium</h2>
            <input
              placeholder={stadiumName}
              style={{ width: 300, height: 50, marginTop: 20, marginRight: 5 }}
              disabled={edit}
              value={stadiumName}
              onChange={handleStadiumNameChange}
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
              placeholder={price}
              style={{ width: 300, height: 50, marginTop: 20, marginLeft: 40 }}
              disabled={edit}
              value={price}
              onChange={handlePriceChange}
            />
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

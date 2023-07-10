import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import Stadiums from "./components/Stadiums";
import StadiumDetails from "./components/StadiumDetails";
import AddStadium from "./components/AddStadium";
import Reservations from "./components/Reservations";
import Users from "./components/Users";
import ReservationDetails from "./components/ReservationDetails";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Stadiums />}></Route>
        <Route path="StadiumDetails/:id" element={<StadiumDetails />}></Route>
        <Route path="AddStadium" element={<AddStadium />}></Route>
        <Route path="Reservations" element={<Reservations />}></Route>
        <Route path="Users" element={<Users />}></Route>
        <Route
          path="Reservations/ReservationDetails/:id"
          element={<ReservationDetails />}
        ></Route>
        <Route path="/UserDetails/:id" element={<UserDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;

// import "./App.css";
// import React, { useEffect } from "react";
// import NavBar from "./components/NavBar";
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// import { getDatabase, ref, onValue } from "firebase/database";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDOBysCgGekFr0qqtZAbgfLs3Q5-qgYPSg",
// //   authDomain: "gameon-e9da9.firebaseapp.com",
// //   databaseURL: "https://gameon-e9da9-default-rtdb.firebaseio.com",
// //   projectId: "gameon-e9da9",
// //   storageBucket: "gameon-e9da9.appspot.com",
// //   messagingSenderId: "94833479137",
// //   appId: "1:94833479137:web:f9ee58ed3f413a06fa96a0",
// //   measurementId: "G-XWRV7DK00D"
// // };

// // const database = getDatabase(app);

// function App() {
//   // const app = initializeApp(firebaseConfig);
//   // const analytics = getAnalytics(app);

//   useEffect(() => {
//     const db = getDatabase();
//     const starCountRef = ref(db, "/stadiums/");
//     onValue(starCountRef, (snapshot) => {
//       console.log(snapshot.val());
//     });
//   }, []);
//   console.log("hi");
//   return (
//     <div className="App">
//       <NavBar />
//     </div>
//   );
// }

// export default App;

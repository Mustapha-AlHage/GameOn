import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://i.imgur.com/UzMeZMp.png"
          style={{
            height: 75,
            borderRadius: 500,
            width: 75,
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div className="header_right">
        <span className="header_text">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: activeLink === "/" ? "#FC7F00" : "white",
              fontSize: activeLink === "/" ? 20 : 18,
            }}
            onClick={() => handleLinkClick("/")}
          >
            Stadiums
          </Link>
        </span>
        <span className="header_text">
          <Link
            to="/Reservations"
            style={{
              textDecoration: "none",
              color: activeLink === "/Reservations" ? "#FC7F00" : "white",
              fontSize: activeLink === "/Reservations" ? 20 : 18,
            }}
            onClick={() => handleLinkClick("/Reservations")}
          >
            Reservation
          </Link>
        </span>
        <span className="header_text">
          <Link
            to="/Users"
            style={{
              textDecoration: "none",
              color: activeLink === "/Users" ? "#FC7F00" : "white",
              fontSize: activeLink === "/Users" ? 20 : 18,
            }}
            onClick={() => handleLinkClick("/Users")}
          >
            Users
          </Link>
        </span>
      </div>
    </div>
  );
}

// <div>
//   <nav className="navBar">
//     <ul>
//       <li style={{ marginRight: "10px", marginLeft: "15px" }}>GameOn</li>
//       {/* <li><Link to="/">Home</Link></li> */}
//       <li>
//         <Link to="/">Modify</Link>
//       </li>
//       <li>
//         <Link to="AddStadium">Add</Link>
//       </li>
//     </ul>
//     <ul className="navBar__right">
//       <li>
//         <input
//           type="search"
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//           className="navBar__right__input"
//           style={{
//             backgroundColor: "white",
//             width: "200px",
//             height: "40px",
//           }}
//         />
//       </li>
//       <li>
//         <button
//           className="navBar__right__button"
//           style={{
//             backgroundColor: "#18274E",
//             borderRadius: "30",
//             width: "100px",
//             height: "45px",
//             marginLeft: "10px",
//             color: "white",
//           }}
//         >
//           search
//         </button>
//       </li>
//     </ul>
//   </nav>
// </div>

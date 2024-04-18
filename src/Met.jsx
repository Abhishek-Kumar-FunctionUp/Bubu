import React, { useState } from "react";
import met from "./met.mp4";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles.css"; // Import your CSS file

export default function Met() {
  const [showButton, setShowButton] = useState(false);
  const history = useNavigate();

  const handleVideoEnded = () => {
    setShowButton(true);
  };

  const handleButtonClick = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Do You Love Me?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked 'Yes', navigate to a different page
        history("/magic");
      }
    });
  };
  return (
    <div className="video-container">
      <video autoPlay onEnded={handleVideoEnded}>
        <source src={met} type="video/mp4" />
      </video>
      {showButton && (
        <button onClick={handleButtonClick} className="button-video">
          Next
        </button>
      )}
    </div>
  );
}

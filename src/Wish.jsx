import React from "react";
import wish from "./wish.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Forgive.css"; // Import CSS file

export default function Wish() {
  const history = useNavigate();

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
        history("/hope");
      }
    });
  };
  return (
    <div className="forgive-container">
      <img src={wish} className="forgive-image" />
      <button onClick={handleButtonClick} className="button-image">
        Next
      </button>
    </div>
  );
}

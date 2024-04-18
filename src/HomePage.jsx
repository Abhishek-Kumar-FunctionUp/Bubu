import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import home from "./home.mp4";
import "./styles.css"; // Import your CSS file

export default function HomePage() {
  const [showButton, setShowButton] = useState(false);
  const history = useNavigate();
  const videoRef = useRef(null);

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
        history("/sorry");
      }
    });
  };

  // Function to play the video on user gesture
  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  };

  return (
    <div className="video-container">
      {/* Apply the video container class */}
      <video
        ref={videoRef}
        autoPlay
        muted // Mute the video
        onEnded={handleVideoEnded}
        onClick={handleVideoPlay} // Play the video on user click
      >
        <source src={home} type="video/mp4" />
      </video>
      {showButton && (
        <button onClick={handleButtonClick} className="button-video">
          Next
        </button>
      )}
    </div>
  );
}

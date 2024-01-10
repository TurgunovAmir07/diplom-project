import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SnackBar from "../snackbar/SnackBar";

const citiesImages = [
  "https://images.unsplash.com/photo-1547640084-1dfcc7ef3b22?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1676469292214-2871e2841cbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const getRandomImg = () => {
  return citiesImages[Math.floor(Math.random() * citiesImages.length)];
};

export const Test = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(getRandomImg());

  useEffect(() => {
    setBackgroundImage(getRandomImg());
  }, []);

  const handleMouseHover = () => {
    setMouseHover(true);
  };
  const handleMouseOut = () => {
    setMouseHover(false);
  };

  return (
    <div
      // TODO:
      // key={}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
      style={{
        backgroundImage: `url(${getRandomImg()})`,
        backgroundSize: "cover",
        fontFamily: "Roboto",
        color: "#fff",
        lineHeight: "1.5",
        fontSize: "16px",
        // fontWeight: "0",
        letterSpacing: "1px",
        "-webkit-text-stroke": "1px #ffffff",
        "text-stroke": "1px #ffffff",
        width: "200px",
        height: "auto",
        padding: "10px",
        border: "1px solid #222",
        marginBottom: "10px",
        borderRadius: "20px",
        transition: "all 0.4s ease",
        transform: mouseHover ? "translateY(-10px)" : "translateY(0)",
        boxShadow: mouseHover
          ? "0 0 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 0, 0, 0.3)"
          : "none",
      }}
    >
      {mouseHover ? (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            height: "auto",
            padding: "5px 5px",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>CountryCode:</strong> countryCode
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>RegionCode:</strong> regionCode
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>population:</strong> population
          </div>

          <Button variant="text">
            <Link
              to="/card"
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: "#0080ff",
              }}
            >
              Learn More
            </Link>
          </Button>
        </div>
      ) : (
        <div key="cityName">
          <h2
            style={{
              fontFamily: "sans-serif",
              marginBottom: "15px",
            }}
          >
            cityName
          </h2>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Country:</strong> country
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Region:</strong> region
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Latitude:</strong> latitude
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Longitude:</strong> longitude
          </div>
        </div>
      )}
    </div>
  );
};

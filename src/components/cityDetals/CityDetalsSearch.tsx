import { useEffect, useState } from "react";

interface Detals {
  wikiDataId?: string;
  city: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  elevationMeters?: number;
  latitude: number;
  longitude: number;
  population: number;
  timeZone?: string;
  distance?: number | null;
}

const citiesImages = [
  "https://images.unsplash.com/photo-1547640084-1dfcc7ef3b22?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1676469292214-2871e2841cbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const getRandomImg = () => {
  return citiesImages[Math.floor(Math.random() * citiesImages.length)];
};

export const CityDetalsSearch = ({
  city,
  country,
  countryCode,
  latitude,
  longitude,
  population,
  region,
  regionCode,
}: Detals) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [, setBackgroundImage] = useState(getRandomImg());

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
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
      style={{
        backgroundImage: `url(${getRandomImg()})`,
        backgroundSize: "cover",
        fontFamily: "Roboto",
        color: "#fff",
        lineHeight: "1.5",
        fontSize: "16px",
        letterSpacing: "1px",
        WebkitTextStroke: "1px #ffffff",
        width: "200px",
        height: "auto",
        padding: "10px",
        border: "1px solid #222",
        marginBottom: "20px",
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
            height: "220px",
            padding: "5px 5px",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>CountryCode:</strong> {countryCode}
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>RegionCode:</strong> {regionCode}
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>population:</strong> {population}
          </div>
        </div>
      ) : (
        <div key={city}>
          <h2
            style={{
              fontFamily: "sans-serif",
              marginBottom: "15px",
            }}
          >
            {city}
          </h2>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Country:</strong> {country}
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Region:</strong> {region}
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Latitude:</strong> {latitude}
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>Longitude:</strong> {longitude}
          </div>
        </div>
      )}
    </div>
  );
};

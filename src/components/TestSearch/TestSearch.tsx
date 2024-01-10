import { TextField } from "@mui/material";
import { useGetDetalsQuery } from "../../API/detalsApi";
import { useEffect, useState } from "react";
import { CityDetalsSearch } from "../cityDetals/CityDetalsSearch";
import { Link } from "react-router-dom";
import AddToFavourites from "../addToFavourites/AddToFavourites";

export const SearchCity = () => {
  const [wikiDataId, setWikiDataId] = useState("");
  const { data, isLoading, error } = useGetDetalsQuery(wikiDataId);

  const detals = data?.data;

  if (data) {
    console.log(data);
  }

  // TODO: add to favourites
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = (cityName: string) => {
    const index = favorites.indexOf(cityName);
    if (index !== -1) {
      const newFavorites = [
        ...favorites.slice(0, index),
        ...favorites.slice(index + 1),
      ];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      const newFavorites = [...favorites, cityName];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  return (
    <div
      style={{
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      {isLoading && <h2>Loading...</h2>}
      {error && (
        <h2
          style={{
            margin: "20px 0 0 0",
            fontFamily: "Roboto",
          }}
        >
          please enter the city wikiDataId
        </h2>
      )}
      <form>
        <TextField
          label="enter wikiDataId"
          fullWidth
          value={wikiDataId}
          onChange={(e) => setWikiDataId(e.target.value)}
          sx={{
            maxWidth: "220px",
            margin: "20px 0",
          }}
        />
      </form>
      <div>
        <Link
          key={wikiDataId}
          to={`/card/${wikiDataId}`}
          style={{
            textDecoration: "none",
          }}
        >
          {detals && (
            <CityDetalsSearch
              wikiDataId={detals.wikiDataId}
              city={detals.city}
              country={detals.country}
              countryCode={detals.countryCode}
              region={detals.region}
              regionCode={detals.regionCode}
              latitude={detals.latitude}
              longitude={detals.longitude}
              population={detals.population}
            />
          )}
        </Link>
        <AddToFavourites
          cityName={wikiDataId}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favorites.includes(wikiDataId)}
        />
      </div>
    </div>
  );
};

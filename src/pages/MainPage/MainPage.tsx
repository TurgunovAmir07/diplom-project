// ГЛАВНЫЕ ИМПОРТЫ:
import "../../index.css";
import { useGetCitiesQuery } from "../../API/defaultApi";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/theme/themeContext";

// ИМПОРТЫ КОМПОНЕНТОВ:
import Video from "../../components/video/Video";
import { DefaultCard } from "../../components/default/DefaultCard";
import { FullscreenLoader } from "../../components/UI/FullScreenLoader";
import { StyledMainPage } from "./MainPage.style";
import { Link } from "react-router-dom";
import { SearchCity } from "../../components/TestSearch/TestSearch";
import { Footer } from "../../components/footer/Footer";
import AddToFavourites from "../../components/addToFavourites/AddToFavourites";

// https://www.wikidata.org/wiki/Wikidata:Main_Page

const MainPage = () => {
  const { data, isLoading, error } = useGetCitiesQuery("");

  const cities = data?.data;

  if (cities) {
    console.log(cities);
  }
  if (error) {
    console.log(error);
  }

  const { theme } = useContext(ThemeContext);
  console.log("theme", theme);

  // add ro favourites TODO:

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

  // filtered TODO:

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <StyledMainPage>
      <div>
        <section
          style={{
            width: "100vw",
            height: "100vh",
            marginBottom: "45px",
          }}
        >
          <Video />
        </section>
        <section
          className="search-section"
          style={{
            width: "100vw",
            height: "100vh",
            paddingTop: "5px",
          }}
        >
          <div>
            {isLoading && <FullscreenLoader />}
            <div
              style={{
                display: "flex",
              }}
            >
              {/* TODO: */}
              <SearchCity />
            </div>
            <div className="wrapper">
              {cities &&
                cities
                  .filter((item) =>
                    currentTab === 0 ? true : favorites.includes(item.name)
                  )
                  .map(
                    (item: {
                      cityName: string;
                      countryCode: string;
                      population: number;
                      regionCode: string;
                      name: string;
                      country: string;
                      region: string;
                      latitude: number;
                      longitude: number;
                      wikiDataId: string;
                    }) => (
                      <div key={item.wikiDataId}>
                        <Link
                          key={item.wikiDataId}
                          to={`/card/${item.wikiDataId}`}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <DefaultCard
                            wikiDataId={item.wikiDataId}
                            countryCode={item.countryCode}
                            population={item.population}
                            regionCode={item.regionCode}
                            cityName={item.name}
                            country={item.country}
                            region={item.region}
                            latitude={item.latitude}
                            longitude={item.longitude}
                          />
                        </Link>
                        <AddToFavourites
                          cityName={item.name}
                          onToggleFavorite={handleToggleFavorite}
                          isFavorite={favorites.includes(item.name)}
                        />
                      </div>
                    )
                  )}
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                textAlign: "center",
                maxWidth: "80%",
                flexWrap: "wrap",
              }}
            ></div>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Footer value={currentTab} onChange={handleTabChange} />
        </section>
      </div>
    </StyledMainPage>
  );
};

export default MainPage;

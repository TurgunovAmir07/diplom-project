// ГЛАВНЫЕ ИМПОРТЫ:
import "../../index.css";

// ИМПОРТЫ СТРАНИЦ:

// ИМПОРТЫ КОМПОНЕНТОВ:

import Video from "../../components/video/Video";
// import AutocompleteInput from "../../components/Autocomplete";

//MUI:
import { Container } from "@mui/material";
import Contries from "../../components/iso/Contries";
import { DefaultCard } from "../../components/default/DefaultCard";
// import LogInWindow from "../../components/LogInWindow";
import { useGetCitiesQuery } from "../../API/defaultApi";

const MainPage = () => {
  const { data, isLoading, error } = useGetCitiesQuery("");

  const cities = data?.data;

  if (cities) {
    console.log(cities);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <Video />
      <Container maxWidth="xl">
        {/* <AutocompleteInput data={[]} /> */}

        {/* <LogInWindow /> */}

        <Contries />
        {isLoading && <h1>Loading...</h1>}
        {cities &&
          cities.map(
            (item: {
              name: string;
              country: string;
              region: string;
              latitude: number;
              longitude: number;
            }) => (
              <DefaultCard
                cityName={item.name}
                country={item.country}
                region={item.region}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            )
          )}
      </Container>
    </>
  );
};

export default MainPage;

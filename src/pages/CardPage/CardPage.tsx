import { StyledCardPage } from "./CardPage.styled";
import { useGetDetalsQuery } from "../../API/detalsApi";
import { FullscreenLoader } from "../../components/UI/FullScreenLoader";
import { CityDetals } from "../../components/cityDetals/CityDetals";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const { wikiDataId } = useParams();

  const { data, isLoading, error } = useGetDetalsQuery(wikiDataId);

  const detals = data?.data;

  if (error) {
    console.log(error);
  }
  if (detals) {
    console.log(detals);
  }

  return (
    <>
      <StyledCardPage>
        {isLoading && <FullscreenLoader />}
        <div className="card-container">
          <div className="card-wrapper">
            <div>
              {detals && (
                <CityDetals
                  key={wikiDataId}
                  city={detals.city}
                  country={detals.country}
                  countryCode={detals.countryCode}
                  population={detals.population}
                  distance={detals.distance}
                  elevationMeters={detals.elevationMeters}
                  latitude={detals.latitude}
                  longitude={detals.longitude}
                  region={detals.region}
                  regionCode={detals.regionCode}
                  timeZone={detals.timezone}
                />
              )}
            </div>
          </div>
        </div>
      </StyledCardPage>
    </>
  );
};

export default CardPage;

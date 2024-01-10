import { StyledCardPageAttributes } from "../../pages/CardPage/CardPage.styled";

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

export const CityDetals = ({
  city,
  country,
  countryCode,
  distance,
  elevationMeters,
  latitude,
  longitude,
  population,
  region,
  regionCode,
  timeZone,
}: Detals) => {
  return (
    <StyledCardPageAttributes>
      <div className="attribute">
        <h1 className="hoverable">
          <span className="text-attribute">City: </span>
          {city}
        </h1>
        <div className="hoverable">
          <span className="text-attribute">Country: </span>
          {country}
        </div>
        <div className="hoverable">
          <span className="text-attribute">CountryCode: </span>
          {countryCode}
        </div>
        <div className="hoverable">
          <span className="text-attribute">Distance: </span>
          {distance}
        </div>
        <div className="hoverable">
          <span className="text-attribute">ElevationMeters: </span>
          {elevationMeters}
        </div>
        <div className="hoverable">
          <span className="text-attribute">Latitude: </span>
          {latitude}
        </div>
        <div className="hoverable">
          <span className="text-attribute">Longitude: </span>
          {longitude}
        </div>
        <div className="hoverable">
          <span className="text-attribute">Population: </span>
          {population}
        </div>
        <div className="hoverable">
          <span className="text-attribute">Region: </span>
          {region}
        </div>
        <div className="hoverable">
          <span className="text-attribute">RegionCode: </span>
          {regionCode}
        </div>
        <div className="hoverable">
          <span className="text-attribute">TimeZone: </span>
          {timeZone}
        </div>
      </div>
    </StyledCardPageAttributes>
  );
};

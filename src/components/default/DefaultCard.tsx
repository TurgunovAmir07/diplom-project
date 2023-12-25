interface IDefaultCardProps {
  cityName: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
}

export const DefaultCard = ({
  cityName,
  country,
  region,
  latitude,
  longitude,
}: IDefaultCardProps) => {
  return (
    <div id="container">
      <div key={cityName}>
        <h2>{cityName}</h2>
        <div>Country: {country}</div>
        <div>Region: {region}</div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    </div>
  );
};

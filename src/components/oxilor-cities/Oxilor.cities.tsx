import React from "react";
import { useGetCitiesQuery } from "../../API/oxilorApi";

const CitiesComponent: React.FC<{ countryCode: string }> = ({
  countryCode,
}) => {
  // Вызовите хук useGetCitiesQuery с передачей кода страны
  const { data, error, isLoading } = useGetCitiesQuery(countryCode);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cities data: {error}</p>;
  }
  if (data) {
    console.log(data);
  }

  // Рендерите компонент с использованием данных
  return (
    <div>
      <h2>Cities in {countryCode}</h2>
      <ul>
        {data?.edges.map((edge) => (
          <li key={edge.node.id}>{edge.node.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesComponent;

import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Stack, Button } from "@mui/material";
import { getCountry, countries } from "iso-3166-1-alpha-2";

interface CountryOption {
  label: string;
  value: string;
}

const AutocompleteInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryList, setCountryList] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );

  useEffect(() => {
    const filteredCountries = Object.keys(countries)
      .filter((code) =>
        countries[code].toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((code) => ({ label: countries[code], value: code }));

    setCountryList(filteredCountries);
  }, [searchTerm]);

  const handleSearch = () => {
    if (selectedCountry) {
      // Выполните действия по поиску на основе выбранной страны
      console.log(
        `Searching for country: ${selectedCountry.label} (${selectedCountry.value})`
      );
    } else {
      // Если не выбрана страна, выполните действия по поиску на основе текста
      console.log(`Searching for country: ${searchTerm}`);
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: 300 }} style={{ marginBottom: "200px" }}>
        <Autocomplete
          disablePortal
          id="country-autocomplete"
          options={countryList}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Country"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
          onChange={(_, newValue) => setSelectedCountry(newValue)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </>
  );
};

export default AutocompleteInput;

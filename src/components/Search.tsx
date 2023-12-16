import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const { onChange, value } = props;

  return (
    <>
      <TextField
        type="search"
        value={value}
        onChange={onChange}
        variant="outlined"
        label="Search"
        size="small"
        sx={{
          "& fieldset": {
            borderRadius: "25px",
          },
          mb: "20px",
          mt: "20px",
        }}
      />
    </>
  );
};

export default Search;

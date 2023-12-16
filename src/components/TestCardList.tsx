import React from "react";
import TestCardItem from "./TestCardItem";
import { Grid } from "@mui/material";

interface TestCardListProps {
  goods: { id: string; name: string; price: number }[];
  setOrder: (item: { id: string; name: string; price: number }) => void;
}

const TestCardList: React.FC<TestCardListProps> = (props) => {
  const { goods, setOrder } = props;

  return (
    <Grid container spacing={2}>
      {goods.map((item) => (
        <TestCardItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};

export default TestCardList;

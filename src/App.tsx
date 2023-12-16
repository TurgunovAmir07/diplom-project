// ГЛАВНЫЕ ИМПОРТЫ:
import React, { useState } from "react";
import "./index.css";

// ИМПОРТЫ КОМПОНЕНТОВ:
import { TestCard } from "./data/TestCard";
import Search from "./components/Search";
import BasketList from "./components/BasketList";
import TestCardList from "./components/TestCardList";
import { Button, Container } from "@mui/material";

//MUI:
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ModalPage from "./pages/ModalPage";

interface ITestCard {
  id: string;
  name: string;
  price: number;
}

interface IOrderItem extends ITestCard {
  quantity: number;
}

interface TestCardArrayProps {
  testCardArray: string[];
}

const App = () => {
  <ModalPage />;

  // TODO:
  const testCardArray: TestCardArrayProps["testCardArray"] = [
    "Дэвид Флэнаган",
    "Алекс Бэнкс и Ева Порселло",
    "Робин Вирух",
    "Фундаментальный JavaScript",
    "Основы TypeScript",
  ];

  const [order, setOrder] = useState<IOrderItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ITestCard[]>(TestCard);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setProducts(TestCard);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((TestCard) =>
        TestCard.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (TestCardItem: ITestCard) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === TestCardItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== TestCardItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: TestCardItem.id,
          name: TestCardItem.name,
          price: TestCardItem.price,
          quantity,
        },
      ]);
    }
  };

  const removeFromOrder = (TestCardItem: ITestCard) => {
    setOrder(order.filter((item) => item.id !== TestCardItem.id));
  };

  return (
    <Container maxWidth="xl">
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "100px",
          width: "300px",
          height: "240px",
          background: "#e3e3e3",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              background: "#ffffff",
              borderRadius: "20px",
              marginBottom: "20px",
              height: "100px",
            }}
          />
          <div>
            <TextField
              size="small"
              label="type your email"
              fullWidth
              sx={{
                background: "#fff",
                marginBottom: "15px",
              }}
            />
            <Button
              color="error"
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              Go nomad
            </Button>
            <div
              style={{
                textAlign: "center",
              }}
            >
              Already a member?{" "}
              <a
                href="#"
                style={{
                  color: "red",
                }}
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      <video
        loop
        autoPlay
        muted
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          marginBottom: "180px",
        }}
      >
        <source src="https://static.videezy.com/system/resources/previews/000/004/997/original/iceland_sailboats_harbour.mp4" />
      </video>
      <Search value={search} onChange={handleChange} />
      {/* TODO: */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={testCardArray}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <TestCardList goods={products} setOrder={addToOrder} />
      <BasketList
        order={order}
        setOrder={(id: string) => {
          const TestCardItem = order.find((item) => item.id === id);
          if (TestCardItem) {
            removeFromOrder(TestCardItem);
          }
        }}
      />
    </Container>
  );
};

export default App;

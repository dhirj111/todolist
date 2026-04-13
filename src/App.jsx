import Header from "./mycomponent/Header";
// import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./mycomponent/Todos";
import Footer from "./mycomponent/Footer";
import { useState } from "react";

function App() {
const onDelete = (item) => {
  console.log("i am on delete", item);
  setItems(items.filter((e) => {return e !== item}));
};


  const [items, setItems] = useState([
    {
      id: 1,
      title: "go to market",
      desc: "you need to go to market to get this job done",
    },
    {
      id: 2,
      title: "go to mall",
      desc: "you need to go to mall to get this job done",
    },
    {
      id: 3,
      title: "go to school",
      desc: "you need to go to school to get this job done",
    },
  ]);
  return (
    <>
      <Header name="Alice" />
      <Todos items={items} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

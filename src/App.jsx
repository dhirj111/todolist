import Header from "./mycomponent/Header";
// import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./mycomponent/Todos";
import Footer from "./mycomponent/Footer";
import { useEffect, useState } from "react";
import AddTodo from "./mycomponent/AddTodo";

function App() {
  let initItems;
  if (localStorage.getItem("items") === null) {
    initItems = [];
  } else {
    initItems = JSON.parse(localStorage.getItem("items"));
  }
      const [items, setItems] = useState(initItems);

    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));
    }, [items]);
  const onDelete = (item) => {
    console.log("i am on delete", item);
    setItems(
      items.filter((e) => {
        return e !== item;
      }),
    );

  };
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);

    let id;
    if (items.length == 0) {
      id = 1;
    } else {
      id = items.length + 1;
    }
    var myTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setItems([...items, myTodo]);
    console.log(myTodo);

  }
  
  return (
    <>
      <Header name="Alice" />
      <AddTodo addTodo={addTodo} />
      <Todos items={items} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

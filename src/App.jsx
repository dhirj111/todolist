import Header from "./mycomponent/Header";
// import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./mycomponent/Todos";
import Footer from "./mycomponent/Footer";
const onDelete =() => {
                  console.log("i am on delete");
                }
function App() {
  let items = [
    { id: 1, title: "Buy groceries", desc: "Milk, Bread, Eggs, Butter" },
    { id: 2, title: "Call Mom", desc: "Check in and say hi" },
    { id: 3, title: "Finish project", desc: "Complete the React project" },

  ];
  return (
    <>
      <Header  name="Alice"/>
       <Todos items={items} onDelete={onDelete} /> 
       <Footer /> 
    </>
  );
}

export default App;

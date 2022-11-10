import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [totalPrice, setPrice] = useState(0)
  const addToCart = (itemName, itemPrice) => {
    setCart([... cart, itemName])
    setPrice(totalPrice+itemPrice)};
  
  
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem prop1 = {item} prop2={index} prop3={item} prop4={item} prop5={item} updateCart={addToCart}/>// replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {totalPrice} {cart}
        {/* <p>{itemName}</p> <p>{totalPrice}</p> */}
        {/* {cart.map((itemName) => {
          return 
        })}; */}
      </div>
    </div>
  );
}

export default App;

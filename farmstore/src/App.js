import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Cart from "./components/cart/Cart";
import { CartProvider, useCart } from "react-use-cart";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;

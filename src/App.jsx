import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
import products from "./data/products";
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, amount: i.amount + 1 } : i,
        ),
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };
  const removeFromCart = (id) => {
    let filteredcart = cart.filter((p) => p.id !== id);
    setCart(filteredcart);
  };
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    );
  };

  return (
    <div className="bg-gray-100 p-2 sm:p-10">
      <section className="fixed bottom-0 right-0">
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </section>
      <main className="container mx-auto p-2">
        <h2 className="text-2xl font-bold text-gray-900  uppercase mb-10">
          Products
        </h2>

        <section className="flex justify-start items-start min-h-screen gap-5 flex-wrap">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCartHandler={addToCart} />
          ))}
        </section>
      </main>
    </div>
  );
}
export default App;

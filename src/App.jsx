import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
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
  const products = [
    {
      id: 1,
      name: " Galaxy Watch7",
      description:
        "Power through your day with advanced fitness tracking, heart rate monitoring, and a vibrant AMOLED display.",
      cost: 299,
      img: "/images/watch.png",
    },
    {
      id: 2,
      name: "iphone 17 pro",
      description:
        " Exceptional performance. New Center Stage front camera. Ultimate pro camera system. Breakthrough battery life. A19 Pro chip.",
      cost: 950,
      img: "/images/mobile.png",
    },
    {
      id: 3,
      name: "AirPods Max 2",
      description:
        "High-fidelity sound, improved Active Noise Cancellation, new intelligent features. Free shipping and engraving at apple.com.",
      cost: 400,
      img: "/images/air-pod.png",
    },

  ];
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

import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.cost * item.amount,
    0,
  );

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-3xl mx-auto mb-8">
      {/* Cart Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <i className="fa fa-shopping-cart text-gray-700"></i>

          <h2 className="font-semibold text-gray-900">Shopping Cart</h2>

          <span className="text-sm bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5 text-gray-600">
            {totalItems}
          </span>
        </div>

        <span className="text-sm text-gray-500">{totalItems} products</span>
      </div>

      {/* Cart Items */}
      <div className="p-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeFromCartHandler={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>
        )}
      </div>

      {/* Cart Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div>
          <p className="text-sm text-gray-500">Total</p>

          <p className="text-xl font-bold text-gray-900">${totalPrice}</p>
        </div>

        <button
          type="button"
          disabled={cart.length === 0}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;

const CartItem = ({
  product,
  removeFromCartHandler,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <article className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-14 h-14 object-contain rounded-md bg-gray-50"
      />

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          ${product.cost}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => decreaseQuantity(product.id)}
          className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 cursor-pointer"
        >
          −
        </button>

        <span className="px-3 py-1.5 text-sm font-medium border-x border-gray-200">
          {product.amount}
        </span>

        <button
          type="button"
          onClick={() => increaseQuantity(product.id)}
          className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <p className="w-20 text-right font-semibold text-gray-900">
        ${product.cost * product.amount}
      </p>

      {/* Remove */}
      <button
        type="button"
        onClick={() => removeFromCartHandler(product.id)}
        className="text-gray-400 hover:text-red-600 cursor-pointer"
        aria-label={`Remove ${product.name}`}
      >
        <i className="fa fa-trash"></i>
      </button>
    </article>
  );
};

export default CartItem;
const ProductCard = ({ product, addToCartHandler }) => {
  return (
    <article className="max-w-xs w-full border border-gray-200 rounded-lg bg-white shadow-md flex flex-col">
      <figure className="h-56 rounded-t-lg bg-gray-50 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={product.img}
          alt={product.name}
        />
      </figure>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight capitalize">
          {product.name}
        </h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">${product.cost}</p>
          <button
            className="inline-flex gap-2 items-center bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 cursor-pointer"
            type="button"
            onClick={() => {
              addToCartHandler(product);
            }}
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;

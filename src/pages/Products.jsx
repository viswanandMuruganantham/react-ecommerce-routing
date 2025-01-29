import laptopImg from "../assets/images/laptop.png";
import headphonesImg from "../assets/images/headphone.png";

const productList = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: laptopImg,
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    image: headphonesImg,
  },
];

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <h2 >Products</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

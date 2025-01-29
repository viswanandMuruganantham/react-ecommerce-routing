import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "30px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "20px", color: "#fff" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "20px", color: "#fff" }}>Products</Link>
      <Link to="/cart" style={{ color: "#fff" }}>Cart</Link>
    </nav>
  );
};

export default Navbar;

import welcomeImg from '../assets/images/welcomes.png';
const Home = () => {
    return (
      <div className="home-container">
        <h2 className="home-title">Welcome to Our Store!</h2>
        <p className="home-description">
          Shop for the best products at affordable prices.
        </p>
        <img
          src={welcomeImg}
          alt="Welcome to our store"
          className="home-image"
        />
        <p className="home-description">
          <strong>Start shopping today</strong> and enjoy great deals on laptops, electronics, accessories, and more.
        </p>
        
      </div>
    );
  };
  
  export default Home;
  
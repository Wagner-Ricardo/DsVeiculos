import ButtonIconCard from "components/ButtonIconCard";
import ProductImg from "assets/images/card-car.png";
import "./styles.css";
const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>

      <div className="card-botton-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>

        <div className="card-button-container">
          <ButtonIconCard />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import ProductCard from "components/ProductCard";
import ButtonIconCatalog from "components/ButtonIconCatalog";
import "./styles.css";

const Catalogo = () => {
  return (
    <div className=" container catalog-container">
      <div className="catalogo-seed-container">
        <ButtonIconCatalog />
      </div>

      <div className="row  my-4">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

      </div>
    </div>
  );
};
export default Catalogo;

import Navbar from "components/Navbar";
import "./styles.css";
import ProductCard from "components/ProductCard";
import ButtonIconCatalog from "components/ButtonIconCatalog";
const Catalogo = () => {
  return (
    <>
      <Navbar />
      <div className=" catalog-container">
        <div className="catalogo-seed-container">
          <ButtonIconCatalog />
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6">
                <ProductCard />
            </div>

            <div className="col-sm-6">
                <ProductCard />
            </div>

            <div className="col-sm-6">
                <ProductCard />
            </div>

            <div className="col-sm-6">
                <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalogo;

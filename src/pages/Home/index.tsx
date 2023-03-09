import { ReactComponent as CarHeader } from "assets/images/car-header.svg";
import ButtonIcon from "components/ButtonIcon";
import "./styles.css";
const Home = () => {
  return (

      
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1> O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <CarHeader />
          </div>
        </div>
        <div className="home-button ">
         <p>Comece agora a navegar</p>
          <ButtonIcon />
        </div>
        <footer className="home-footer">
          <div>

          </div>
        </footer>
      </div>
   
  );
};

export default Home;

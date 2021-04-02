import img from "../images/pic.jpeg";
import number1 from "../images/number1.png";
import number2 from "../images/number2.png";
import number3 from "../images/number3.png";
import number4 from "../images/number4.png";
import number5 from "../images/number5.png";
import number6 from "../images/number6.png";
import number7 from "../images/number7.png";
import number8 from "../images/number8.png";
import number9 from "../images/number9.png";
import exit from "../images/exit.png";
import back from "../images/back.png";
import testq from "../images/testq.png";
import testa from "../images/testa.png";
import testa2 from "../images/testa2.png";
import testa3 from "../images/testa3.png";

export default function Assets() {
  return (
    <a-assets>
      <img id="skyTexture" src={img} alt="skyTexture" />
      <img id="number1" src={number1} alt="number1" />
      <img id="number2" src={number2} alt="number2" />
      <img id="number3" src={number3} alt="number3" />
      <img id="number4" src={number4} alt="number4" />
      <img id="number5" src={number5} alt="number5" />
      <img id="number6" src={number6} alt="number6" />
      <img id="number7" src={number7} alt="number7" />
      <img id="number8" src={number8} alt="number8" />
      <img id="number9" src={number9} alt="number9" />
      <img id="exit" src={exit} alt="exit" />
      <img id="back" src={back} alt="back" />
      <img id="testq" src={testq} alt="testq" />
      <img id="testa" src={testa} alt="testa" />
      <img id="testa2" src={testa2} alt="testa2" />
      <img id="testa3" src={testa3} alt="testa3" />
    </a-assets>
  );
}

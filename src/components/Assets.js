// Shared
import back from "../images/back.png";

// Question hub
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

// Question & Answer 1
import q1 from "../images/question1/q1.png";
import q1a from "../images/question1/q1a.png";
import q1b from "../images/question1/q1b.png";
import q1c from "../images/question1/q1c.png";

export default function Assets() {
  return (
    <a-assets>
      {/* Shared */}
      <img id="back" src={back} alt="back" />

      {/* Question hub */}
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

      {/* Question & Answer 1 */}
      <img id="q1" src={q1} alt="q1" />
      <img id="q1a" src={q1a} alt="q1a" />
      <img id="q1b" src={q1b} alt="q1b" />
      <img id="q1c" src={q1c} alt="q1c" />
    </a-assets>
  );
}

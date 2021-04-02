import { useGlobal, useEffect } from "reactn";

export default function Scene2() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  //Understående bliver ikke "sat". Dette er en note om at det skal fixes i fremtiden.
  useEffect(() => {
    setG({
      ...g,
      preset: "none",
      skyType: "gradient",
      skyColor: "blue",
      horizonColor: "silver",
      groundColor: "burlywood",
      dressing: "apparatus",
      dressingAmount: 100,
      dressingColor: "silver",
    });
  }, []);

  return (
    <>
      {/* Adgang til tutorial (start komponent nummer 1). Kan aktiveres ved at
      fjerne kommentar. */}
      {/* <a-box
        position="-8.5 0.5 -3"
        rotation="0 45 0"
        color="green"
        onClick={() => setStep(0)}
      ></a-box> */}
      <a-box
        src="#number1"
        position="8.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(2)}
      ></a-box>
      <a-box
        src="#number2"
        position="6.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(3)}
      ></a-box>
      <a-box
        src="#number3"
        position="4.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(4)}
      ></a-box>
      <a-box
        src="#number4"
        position="2.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(5)}
      ></a-box>
      <a-box
        src="#number5"
        position="0.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(6)}
      ></a-box>
      <a-box
        src="#number6"
        position="-1.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(7)}
      ></a-box>
      <a-box
        src="#number7"
        position="-3.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(8)}
      ></a-box>
      <a-box
        src="#number8"
        position="-5.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(9)}
      ></a-box>
      <a-box
        src="#number9"
        position="-7.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(10)}
      ></a-box>
      <a-box
        src="#exit"
        position="-9.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(11)}
      ></a-box>
    </>
  );
}

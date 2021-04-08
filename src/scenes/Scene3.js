import { useState } from "react";
import { useGlobal, useEffect } from "reactn";

export default function Scene3() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setG({
      ...g,
      preset: "egypt",
    });
  }, []);

  return (
    <>
      <a-box
        src="#back"
        position="12.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(1)}
      ></a-box>
      <a-plane
        src="#testq"
        position="6.5 4.0 9"
        rotation="0 180 0"
        width="4"
        height="4"
      ></a-plane>
      <a-plane
        src="#testq"
        position="6.5 4.0 9"
        rotation="0 0 0"
        width="4"
        height="4"
      ></a-plane>

      <a-box
        src="#testa"
        position="8.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("A")}
      ></a-box>
      <a-box
        src="#testa2"
        position="6.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("B")}
      ></a-box>
      <a-box
        src="#testa3"
        position="4.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("C")}
      ></a-box>
      <a-text
        position="1.0 4.0 9"
        rotation="0 180 0"
        value={`Svar: ${answer}`}
      ></a-text>
      <a-plane
        position="0.5 4.0 9"
        color="green"
        width="2"
        height="0.7"
      ></a-plane>
      <a-text position="0.0 4.0 9" value={`Svar: ${answer}`}></a-text>
      <a-plane
        position="0.5 4.0 9"
        rotation="0 180 0"
        color="green"
        width="2"
        height="0.7"
      ></a-plane>
    </>
  );
}

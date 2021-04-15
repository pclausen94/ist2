import { useGlobal, useEffect } from "reactn";

export default function Scene4() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();
  const [answer, setAnswer] = useGlobal("answer2");

  useEffect(() => {
    setG({
      ...g,
      preset: "goldmine",
      skyColor: "black",
      dressing: "cylinders",
      dressingColor: "gold",
      groundColor: "black",
      dressingAmount: 100,
    });
  }, []);

  return (
    <>
      <a-box
        src="#back"
        position="16.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setStep(1)}
      ></a-box>
      <a-plane
        src="#q2"
        position="10.5 4.0 9"
        rotation="0 180 0"
        width="4"
        height="4"
      ></a-plane>
      <a-plane
        src="#q2"
        position="10.5 4.0 9"
        rotation="0 0 0"
        width="4"
        height="4"
      ></a-plane>

      <a-box
        src="#q2a"
        position="12.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("A")}
      ></a-box>
      <a-box
        src="#q2b"
        position="10.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("B")}
      ></a-box>
      <a-box
        src="#q2c"
        position="8.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("C")}
      ></a-box>
      <a-text
        position="5.0 4.0 9"
        rotation="0 180 0"
        value={`Svar: ${answer}`}
      ></a-text>
      <a-plane
        position="4.5 4.0 9"
        color="green"
        width="2"
        height="0.7"
      ></a-plane>
      <a-text position="4.0 4.0 9" value={`Svar: ${answer}`}></a-text>
      <a-plane
        position="4.5 4.0 9"
        rotation="0 180 0"
        color="green"
        width="2"
        height="0.7"
      ></a-plane>
    </>
  );
}

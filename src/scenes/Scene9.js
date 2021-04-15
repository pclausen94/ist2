import { useGlobal, useEffect } from "reactn";

export default function Scene9() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();
  const [answer, setAnswer] = useGlobal("answer7");

  useEffect(() => {
    setG({
      ...g,
      preset: "japan",
      dressing: "torii",
      dressingColor: "default",
      dressingAmount: "20",
      groundColor: "#11617B",
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
        src="#q7"
        position="6.5 4.0 9"
        rotation="0 180 0"
        width="4"
        height="4"
      ></a-plane>
      <a-plane
        src="#q7"
        position="6.5 4.0 9"
        rotation="0 0 0"
        width="4"
        height="4"
      ></a-plane>

      <a-box
        src="#q7a"
        position="8.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("A")}
      ></a-box>
      <a-box
        src="#q7b"
        position="6.5 1.0 9"
        rotation="0 45 0"
        onClick={() => setAnswer("B")}
      ></a-box>
      <a-box
        src="#q7c"
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

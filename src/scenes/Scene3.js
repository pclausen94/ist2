import { useGlobal, useEffect } from "reactn";

export default function Scene3() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

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
      <a-box src="#testa" position="8.5 1.0 9" rotation="0 45 0"></a-box>
      <a-box src="#testa2" position="6.5 1.0 9" rotation="0 45 0"></a-box>
      <a-box src="#testa3" position="4.5 1.0 9" rotation="0 45 0"></a-box>
    </>
  );
}

import { useGlobal, useEffect } from "reactn";

export default function Scene12({ timerActions }) {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  const handleSceneChange = () => {
    timerActions.handlePause();
    setStep(1);
  };

  useEffect(() => {
    setG({
      ...g,
      preset: "none",
    });
  }, []);

  return (
    <>
      <a-plane
        position="-4.5 3.0 12"
        rotation="0 180 0"
        width="8"
        height="2"
      ></a-plane>
      <a-plane
        position="-4.5 3.0 12"
        rotation="0 0 0"
        width="8"
        height="2"
      ></a-plane>
      <a-text
        position="-0.8 3.0 12"
        rotation="0 180 0"
        value="Husk at have skrevet dine svar og tid ned, du kan nu lukke siden ned."
        width="8"
      ></a-text>
      <a-text
        position="-8.2 3.0 12"
        rotation="0 0 0"
        value="Husk at have skrevet dine svar og tid ned, du kan nu lukke siden ned."
        width="8"
      ></a-text>
    </>
  );
}

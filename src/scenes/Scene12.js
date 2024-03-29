import { useGlobal, useEffect } from "reactn";

export default function Scene12({ timerActions }) {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  const handleSceneChange = () => {
    timerActions.handlePause();
    setStep(12);
  };

  useEffect(() => {
    setG({
      ...g,
      preset: "starry",
      skyType: "atmosphere",
    });
  }, []);

  return (
    <>
      <a-box
        src="#back"
        position="-2.5 1.0 12"
        rotation="0 45 0"
        onClick={() => setStep(1)}
      ></a-box>
      <a-box
        src="#stop"
        position="-6.5 1.0 12"
        rotation="0 45 0"
        onClick={handleSceneChange}
      ></a-box>
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
        value="Simulationen er nu slut. Klik STOP, for at stoppe tiden. Tak for at have spillet med!"
        width="8"
      ></a-text>
      <a-text
        position="-8.2 3.0 12"
        rotation="0 0 0"
        value="Simulationen er nu slut. Klik STOP, for at stoppe tiden. Tak for at have spillet med!"
        width="8"
      ></a-text>
    </>
  );
}

import { useGlobal, useEffect } from "reactn";

export default function Scene1({ timerActions }) {
  const [preset, setPreset] = useGlobal("preset");
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  const handleSceneChange = () => {
    timerActions.handleStart();
    setStep(1);
  };

  useEffect(() => {
    setG({ ...g, preset: "none" });
  }, []);

  return (
    <>
      <a-plane
        position="-1.5 2.5 5"
        rotation="0 180 0"
        color="black"
        width="5"
        height="0.7"
      ></a-plane>

      <a-text
        value="Slip cirklen over firkanten, for at begynde."
        position="0.60 2.5 5"
        rotation="0 180 0"
        color="white"
      ></a-text>
      <a-box
        src="#skyTexture"
        position="-1.5 1.5 5"
        rotation="0 45 0"
        color="red"
        onClick={handleSceneChange}
      ></a-box>
      <a-text
        value="Velkommen til simulationen"
        position="-1.5 2.5 -3"
        color="white"
      ></a-text>
      <a-plane
        position="0.5 2.3 -3"
        color="red"
        width="4"
        height="0.7"
      ></a-plane>
      <a-text
        value="- tryk 'W' eller 'pil-op', for at komme frem"
        position="-1.5 2.1 -3"
        color="white"
      ></a-text>
      <a-text
        value="Du styrer paa WASD-knapperne eller piltasterne"
        position="-1.5 3.1 -8"
        color="white"
      ></a-text>
      <a-plane
        position="0.8 2.9 -8"
        color="red"
        width="4.680"
        height="0.7"
      ></a-plane>
      <a-text
        value="- Fortsaet fremad"
        position="-1.5 2.7 -8"
        color="white"
      ></a-text>
      <a-text
        value="Du kigger rundt med musen, ved at holde venstre-knap nede, imens du drejer rundt"
        position="-1.5 4.0 -12"
        color="white"
      ></a-text>
      <a-text
        value="- Vend dig nu om og gaa fremad imod firkanten"
        position="-1.5 3.6 -12"
        color="white"
      ></a-text>
      <a-plane
        position="0.8 3.8 -12"
        color="red"
        width="4.680"
        height="0.9"
      ></a-plane>
    </>
  );
}

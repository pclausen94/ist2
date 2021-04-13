import { useGlobal, useEffect } from "reactn";

export default function Scene12() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  useEffect(() => {
    setG({
      ...g,
      preset: "starry",
      shadow: true,
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
    </>
  );
}

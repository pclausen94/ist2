import { useGlobal, useEffect } from "reactn";

export default function Scene11() {
  const [step, setStep] = useGlobal("step");
  const [g, setG] = useGlobal();

  useEffect(() => {
    setG({
      ...g,
      preset: "volcano",
      shadow: true,
    });
  }, []);

  return <a-box src="#number1" position="8.5 1.0 9" rotation="0 45 0"></a-box>;
}

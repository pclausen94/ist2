import "aframe";
import "aframe-environment-component";
import { useState, useGlobal } from "reactn";
import useTimer from "./hooks/useTimer";
import { formatTime } from "./utils";
import Camera from "./components/Camera";
import Assets from "./components/Assets";
import Scene from "./components/Scene";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
import Scene7 from "./scenes/Scene7";
import Scene8 from "./scenes/Scene8";
import Scene9 from "./scenes/Scene9";
import Scene10 from "./scenes/Scene10";
import Scene11 from "./scenes/Scene11";
import Scene12 from "./scenes/Scene12";
import Scene13 from "./scenes/Scene13";

function getScene(step, timerActions) {
  switch (step) {
    case 0:
      return <Scene1 timerActions={timerActions} />;

    case 1:
      return <Scene2 />;

    case 2:
      return <Scene3 />;

    case 3:
      return <Scene4 />;

    case 4:
      return <Scene5 />;

    case 5:
      return <Scene6 />;

    case 6:
      return <Scene7 />;

    case 7:
      return <Scene8 />;

    case 8:
      return <Scene9 />;

    case 9:
      return <Scene10 />;

    case 10:
      return <Scene11 />;

    case 11:
      return <Scene12 timerActions={timerActions} />;

    case 12:
      return <Scene13 />;

    default:
      return <Scene1 timerActions={timerActions} />;
  }
}

function App() {
  const [step] = useGlobal("step");
  const { timer, handleStart, handlePause } = useTimer(0);

  const [timerActions, setTimerActions] = useState({
    handleStart: handleStart,
    handlePause: handlePause,
  });

  return (
    <a-scene>
      <Assets />
      <Camera formatTime={formatTime} timer={timer} />
      <Scene>{getScene(step, timerActions)}</Scene>
    </a-scene>
  );
}

export default App;

import "aframe";
import "aframe-environment-component";
import { useState } from "react";
import useTimer from "./hooks/useTimer";
import { formatTime } from "./utils";
import Camera from "./components/Camera";
import Assets from "./components/Assets";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";

function App() {
  const [scene, setScene] = useState(1);
  const handleScene = (newScene) => {
    setScene(newScene);
  };
  const { timer, handleStart } = useTimer(0);
  //   const [count, setCount] = useState(0);

  return (
    <a-scene>
      <Assets />
      <Camera formatTime={formatTime} timer={timer} />
      <Scene1
        scene={scene}
        handleScene={handleScene}
        handleStart={handleStart}
      />
      <Scene2 scene={scene} handleScene={handleScene} />
      <Scene3 scene={scene} handleScene={handleScene} />
    </a-scene>
  );
}

export default App;

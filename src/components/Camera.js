import { useGlobal, useEffect, useState } from "reactn";

export default function Camera({ formatTime, timer }) {
  const [answers, setAnswers] = useGlobal("answers");
  const [answerField, setAnswerField] = useState();

  // useEffect(() => {
  //   let string = "";
  //   answers.map((answer) => {
  //     string = string + " " + answer.character;
  //   });
  //   setAnswerField(string);
  // }, [answers]);

  return (
    <a-camera wasd-controls="acceleration: 20">
      <a-entity
        cursor="fuse: false; fuseTimeout: 500"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
        material="color: red; shader: flat"
        animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
        animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
      ></a-entity>

      {/* Hardcoded point/bogstav system:
      De enkelte linjer skal hver svarer til en valgmulighed med værdierne: A, B, C og D.
      Disse bogstaver skal indsættes ved klik på en svarfirkant under scenerne */}
      <a-text
        position="-0.90 -0.50 -1"
        value={`Svar: ${answerField}`}
        color="#fff"
      ></a-text>
      <a-text
        position="-0.50 -0.75 -1"
        value={`Tid: ${formatTime(timer)}`}
        color="#fff"
        opacity="0.5"
      ></a-text>
    </a-camera>
  );
}

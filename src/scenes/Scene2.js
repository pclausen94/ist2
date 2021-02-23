export default function Scene2({ scene, handleScene }) {
  return (
    <a-entity
      environment={`preset: forest; shadow: true; active: ${scene === 2}`}
    >
      <a-box
        position="-8.5 0.5 -3"
        rotation="0 45 0"
        color="green"
        onClick={() => handleScene(1)}
      ></a-box>
      <a-box
        position="-4.5 1.0 -3"
        rotation="0 45 0"
        color="blue"
        onClick={() => handleScene(3)}
      ></a-box>
    </a-entity>
  );
}

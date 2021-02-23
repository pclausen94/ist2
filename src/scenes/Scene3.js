export default function Scene2({ scene, handleScene }) {
  return (
    <a-entity
      environment={`preset: egypt; shadow: true; active: ${scene === 3}`}
    ></a-entity>
  );
}

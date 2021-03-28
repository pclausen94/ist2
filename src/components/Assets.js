import img from "../images/pic.jpeg";

export default function Assets() {
  return (
    <a-assets>
      <img id="skyTexture" src={img} alt="skyTexture" />
      <img id="niceTexture" src={img} alt="niceTexture" />
    </a-assets>
  );
}

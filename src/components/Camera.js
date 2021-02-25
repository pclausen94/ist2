export default function Camera() {
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
      <a-text position="-1.50 -0.50 -1" value="Player 1" color="#fff"></a-text>
    </a-camera>
  );
}

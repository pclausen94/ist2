import { useGlobal } from "reactn";

export default function Scene({ children, scene, handleScene }) {
  const [g] = useGlobal();
  return (
    <a-entity
      environment={`
      active: ${g.active};
      preset: ${g.preset};
      shadow: ${g.shadow};
      skyType: ${g.skyType};
      skyColor: ${g.skyColor};
      horizonColor: ${g.horizonColor};
      groundColor: ${g.groundColor};
      dressing: ${g.dressing};
      dressingAmount: ${g.dressingAmount};
      dressingColor: ${g.dressingColor};
      `}
    >
      {children}
    </a-entity>
  );
}

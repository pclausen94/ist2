import { useGlobal } from "reactn";

export default function Scene({ children, scene, handleScene }) {
  const [g] = useGlobal();
  return (
    <a-entity
      environment={`
        active: ${g.active};
        preset: ${g.preset};
        shadow: ${g.shadow};
      `}
    >
      {children}
    </a-entity>
  );
}

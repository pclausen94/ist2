import 'aframe'
import 'aframe-environment-component'
import { useState } from 'react'
import Camera from './components/Camera'
import Scene1 from './scenes/Scene1'
import Scene2 from './scenes/Scene2'
import Scene3 from './scenes/Scene3'

function App() {
	const [scene, setScene] = useState(1)
	const handleScene = newScene => {
		setScene(newScene)
	}
  
	return (
		<a-scene>
			<Camera />
			<Scene1 scene={scene} handleScene={handleScene} />
			<Scene2 scene={scene} handleScene={handleScene} />
      <Scene3 scene={scene} handleScene={handleScene} />
		</a-scene>
	)
}

export default App
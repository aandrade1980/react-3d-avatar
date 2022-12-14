import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { AgusModel, AlvuModel } from './models';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h1
          style={{
            textAlign: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(#7928CA,#f700ff)',
            lineHeight: 'normal'
          }}
        >
          Agus
        </h1>
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            width: '50vw',
            height: '50vh'
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <AgusModel position={[0.025, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <div>
        <h1
          style={{
            textAlign: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(#7928CA,#ff7700)',
            lineHeight: 'normal'
          }}
        >
          Alvu
        </h1>

        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            width: '50vw',
            height: '50vh'
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <AlvuModel position={[0.025, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;

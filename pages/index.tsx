import { Edges, useGLTF, Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import "/styles/estilos.module.css"

function Model(){

 const {nodes} = useGLTF("/headless.glb")

 return(
  <group dispose={null}>
    <mesh geometry={nodes.Cube.geometry}>
      <meshStandardMaterial transparent />
      <Edges />

    </mesh>

  </group>
 )

}

// ReactDOM.render(
//   <Canvas dpr={[1,2]} camera={{position:[0,0,0], fov: 50}}>
//     <Suspense fallback={null}>
//       <Stage contactShadow={{ resolution: 1024, scale: 10}}>
//         <Model />
//       </Stage>
//     </Suspense>
//   </Canvas>,
//   document.getElementById('root')
// )


const Home: NextPage = () => {
  return (
    <>
      <Canvas style={{marginTop: '111px', width: '100%', height: '100vh'}} dpr={[1,2]} camera={{position:[0,0,0], fov: 50}}>
        <Suspense fallback={null}>
          <Stage contactShadow={{ resolution: 1024, scale: 10}} >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault dampingFactor={0.3} />
      </Canvas>
    </>
  )
}

export default Home

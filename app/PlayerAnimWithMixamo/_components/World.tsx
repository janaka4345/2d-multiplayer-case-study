'use client'
import { Environment, KeyboardControls, KeyboardControlsEntry, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import Experience from "./Experience"
import { useMemo } from "react"
const World = () => {
  enum Controls {
    forward = 'forward',
    back = 'back',
    left = 'left',
    right = 'right',
    jump = 'jump',
  }
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
    { name: Controls.jump, keys: ['Space'] },
  ], [])
  return (
    <KeyboardControls map={map}>

      <Canvas
        style={{ width: '100svh', height: '100svh' }}>
        <Perf />
        {/* <OrbitControls /> */}
        <Physics debug>
          <ambientLight />
          <Environment preset="sunset" />
          <Experience />
        </Physics>
      </Canvas></KeyboardControls>
  )
}
export default World
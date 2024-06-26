import React from 'react'
import { useGLTF } from '@react-three/drei'


const Map = () => {
    const map = useGLTF('./map.glb')
    // const map = useGLTF('./cityblend.glb')

    return (
        <primitive object={map.scene} />
    )
}

export default Map
import { useGLTF } from '@react-three/drei';

export interface IModelProps {
  position: [number, number, number];
}

export type GLTF = ReturnType<typeof useGLTF> & {
  nodes: any;
  materials: any;
  animations: any;
};

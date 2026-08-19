import useMousePosition from '../hooks/useMousePosition';
export default function CustomCursor(){const {x,y}=useMousePosition();return <><div className="cursor-dot" style={{left:x,top:y}}/><div className="cursor-ring" style={{left:x,top:y}}/></>}

import {useEffect,useState} from 'react';
export default function useMousePosition(){const [p,setP]=useState({x:0,y:0});useEffect(()=>{const f=e=>setP({x:e.clientX,y:e.clientY});window.addEventListener('pointermove',f,{passive:true});return()=>window.removeEventListener('pointermove',f)},[]);return p}

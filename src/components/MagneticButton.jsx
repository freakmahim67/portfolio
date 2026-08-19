import useMagnetic from '../hooks/useMagnetic';
export default function MagneticButton({children,className='',...props}){const ref=useMagnetic(.18);return <a ref={ref} className={`inline-flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] ${className}`} {...props}>{children}</a>}

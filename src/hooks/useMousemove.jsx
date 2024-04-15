import { useEffect, useState } from "react"


function useMousemove() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const handleMousemove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMousemove)
        return () => {
            window.addEventListener('mousemove', handleMousemove)
        }
    }, [])
    return position
}

export default useMousemove

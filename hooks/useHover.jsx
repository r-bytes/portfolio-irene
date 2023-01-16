import { useState, useEffect, useRef } from 'react'

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
        hoverRef.current.addEventListener("mouseenter", enter)
        hoverRef.current.addEventListener("mouseleave", leave)
        
        return () => {
            if(hoverRef.current) {
                hoverRef.current.removeEventListener("mouseenter", enter)
                // eslint-disable-next-line
                hoverRef.current.removeEventListener("mouseleave", leave)
            }
        }
    }, [])

    return (
        [hovered, hoverRef]
    )
}

export default useHover
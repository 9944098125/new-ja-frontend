import React from 'react'

export default function useClickOutside(ref, func) {
    const listener = (event) => {
        if (ref.current.contains(event.target)) {
            return
        }
        func()
    }
    React.useEffect(() => {

    }, [])

}
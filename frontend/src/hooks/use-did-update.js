import { useEffect, useRef } from 'react';

export const useDidUpdate = (callback, dependencies) => {
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        callback()
    }, dependencies)
}
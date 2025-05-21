import { useCallback } from 'react'

export const useIComponent = () => {
    const onExecute = useCallback(() => {
        return null
    },[])

    const onUpdate = useCallback((data: any) => {

    }, [])

    return { onExecute, onUpdate }
}

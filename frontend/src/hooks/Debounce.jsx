import { useEffect, useState } from "react";


export function useDebounce(value, timeout){
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        let timeoutnumber = setTimeout(() => {
            setDebounced(value)
        },timeout)
        return () => {
            clearInterval(timeoutnumber)
        }
    }, [value])
    return debounced

}
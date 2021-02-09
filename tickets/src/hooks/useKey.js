import {useState} from 'react'

function useKey() {
    const [C , SetC] = useState(initial = null)

    const a = (Key) => {
        return [...C,Key]
    }
}

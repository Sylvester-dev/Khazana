import {useState} from 'react'


export default function useKey(initialValue) {
    const [C , SetC] = useState(initialValue)

    const a = (Key) => {
        return [...C,Key]
    }
}

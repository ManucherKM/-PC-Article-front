import { useState } from 'react'

const Input = (props: any) => {

    const [val, setVal] = useState("");

    const newVal = (e: any) => {
        setVal(e.target.value)
        props.updateVal(e.target.value)
    }

    return (
        <>
            <input value={val} onChange={newVal} type="text" className='rounded px-2 py-2 text-base outline-none' />
        </>
    )
}

export default Input
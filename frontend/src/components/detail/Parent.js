import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [number, setNumber] = useState(0)

    const getData = (number) => {
        setNumber(number);
    }

    return (
        <div>
            <p>여기는 부모입니다 : {number}</p>
            <Child number={number} getData={getData}></Child>
        </div>
    )
}

export default Parent;
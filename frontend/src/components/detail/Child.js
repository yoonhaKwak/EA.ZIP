import React from 'react'

const Child = ({ number, getData }) => {

    const onClick = () => {
        console.log(number);
        getData(number + 1);
    }

    return (
        <div>
            <button onClick={onClick}>+</button>
        </div>
    )
}

export default Child;
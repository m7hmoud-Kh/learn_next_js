import React from 'react'

const Revene = async () => {

    await new Promise((resolve) => setTimeout(() => {
        resolve('Content Lodding....');
        console.log('hello world')
    }, 4000));

    return (
        <div>Revene</div>
    )
}

export default Revene
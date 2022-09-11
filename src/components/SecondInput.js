import React from 'react';

function SecondInput ({ handleSInput }) {

    return (
        <input type="number" placeholder='Second Input' onChange={(e) => handleSInput(e)}/>
    )
}

export default SecondInput
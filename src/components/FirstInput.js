import React from "react";

function FirstInput({handleFInput}) {

    return (
        <input type="number" placeholder="First Input" onChange={(e) => handleFInput(e)}/> 
    )
}

export default FirstInput
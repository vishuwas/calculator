import React from "react";

function SubmitButton ({ handleSubmit }) {

    return (
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
    )
}

export default SubmitButton
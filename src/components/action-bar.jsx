import React from "react";

export default function ActionBar(props) {
    return (
        <div>
            <div>Action</div>
            <button onClick={() => props.createUnit(4,4)}>Create Unit</button>
        </div>
    )
}
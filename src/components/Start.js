import React from "react";


export default function Start(props){
    return (
        <div className="start-page">
            <h1 className="start--header">Quizzical</h1>
            <p className="start--description">Some description if needed</p>
            <button className="start--button" onClick={props.handleClick}>Start quiz</button>
        </div>
    )

}

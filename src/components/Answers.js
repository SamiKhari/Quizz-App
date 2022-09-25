import React from "react";

export default function Answer(props) {

    const isCorrect = props.answer === props.correctAnswer;
    const isHeld = props.isHeld;
    let color;
    
    if(props.enabled){
        if(isCorrect){
            color = "#94D7A2";
        }else if (isHeld){
            color = "#F8BCBC";
        }else{
            color = "#F5F7FB";
        }
    }else{
        if(isHeld){
            color = "#D6DBF5";
        }else{
            color = "#F5F7FB";
        }
    }


    const style = {
        border: isHeld ? "none" : "1px solid #D6DBF5",
        backgroundColor: color
    }

    return (
        <button onClick={props.clickHandler} style={style} className="answer--button" value={props.answer}>{props.answer}</button>
    )
}
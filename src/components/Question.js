import React from "react";
import Answer from "./Answers";

export default function Question(props) {

    const [ heldAnswer, setHeldAnswer ] = React.useState([]);

    const answers =  props.incorrectAnswers.concat(props.correctAnswer)

    const answerElements = answers.map(answer => {
        return <Answer 
            enabled={props.enabled}
            key={answer}
            for={props.question}
            answer={answer}
            correctAnswer={props.correctAnswer}
            isHeld={heldAnswer === answer}
            clickHandler={() => {
                setHeldAnswer(answer);
                props.onSelected(answer, props.question);
            }}
        />
    })


    return (
        <div className="question--section">
            <h1 className="question">{props.question}</h1>
            <div className="answer-questions">
                {answerElements}  
            </div>      
            <div className="hr"></div>
        </div>
        
    )
}


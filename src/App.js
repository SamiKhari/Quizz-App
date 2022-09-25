import React, { useEffect } from "react";
import Start from "./components/Start";
import Question from "./components/Question";

export default function App(){

    const [ showResults, setShowResults ] = React.useState(false);
    const [ inGame, setInGame ] = React.useState(false);
    const [ questions, setQuestions ] = React.useState([]);
    const [ answers, setAnswers ] = React.useState([]);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=4&type=multiple")
            .then(response => response.json())
            .then(data => {
                setQuestions(data.results)
            })
        }, 
    [inGame]);

    const questionElements = questions.map(question => {
        return <Question 
            key={question.question}
            enabled={showResults}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            onSelected={(answer, question) => {
                const filteredAnswers = answers.filter(answer => answer.question !== question);
                setAnswers(filteredAnswers.concat({question, answer}));
            }}
        />
    })

    function checkAnswers(){
        setShowResults(true);
    }
    useEffect(() => {
        if(showResults){
            setTimeout(() => {
                setShowResults(false);
                setInGame(false);
                setQuestions([]);
                setAnswers([]);
            }, 5000);
        }
    }, [showResults])


    return (
        <div>
            {!inGame && <Start handleClick={() => setInGame(true)} />}
            <div  className="questions--main">
                {inGame && questionElements}
                    {inGame && <button onClick={checkAnswers} className="sumbit--button">Submit</button>}  
            </div>      
        </div>
    )
}
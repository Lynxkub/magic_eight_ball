import React , {useState} from 'react';
import './EightBall.css';


const EightBall = (props) => {
    const idxGen = () => Math.floor(Math.random() * 20);
    const randNum = idxGen();
    const randAnswer = () => {
        return props.answers[randNum].msg
    }
    const answerColor = () => {
        return props.answers[randNum].color
    }
    const buttonClickFunc = () => {
        setAnswer(randAnswer);
        setColor(answerColor);
    }
    const ballReset = () => {
        setAnswer('Think of a question');
        setColor('black');
    }
    const [answer , setAnswer] = useState("Think of a question");
    const [color , setColor] = useState('black');
    return (
        <div className = 'EightBall'>
            <div className = 'EightBall-ball' style = {{backgroundColor : color  , color : 'white'}}>
                <div className = 'EightBall-answer'>{answer}</div>
                </div>
            <button onClick = {() => buttonClickFunc()}>Ask the magic 8 ball</button>
            <button onClick = {() => ballReset()}>Reset Ball</button>
        </div>
    )
}




EightBall.defaultProps = {
    answers :  [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall;
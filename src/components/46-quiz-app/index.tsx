import { ChangeEvent, FC, FormEvent, useState } from 'react';

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const QuizApp: FC = () => {
    const [points, setPoints] = useState(0);
    const [question, setQuestion] = useState(0);
    const [currChoise, setCurrChoise] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target;
        setCurrChoise(id)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (currChoise === quizData[question]['correct']) {
            setPoints(prev => prev + 1)
        }

        if (question < quizData.length) {
            setQuestion(prev => prev + 1)
            setCurrChoise("")
        }
    }

    const handleReload = () => {
        setPoints(0)
        setQuestion(0)
        setCurrChoise("")
    }

    return (
        <main className='quizApp__container'>
            {
                question === quizData.length ?
                    <div className='quizApp__box'>
                        <h2>You answered {points} questions correctly</h2>
                        <button onClick={handleReload}>Reload</button>
                    </div>
                    :
                    <form className='quizApp__box' onSubmit={handleSubmit}>

                        <h2 id="question">{quizData[question].question}</h2>
                        <ul>
                            {
                                ["a", "b", "c", "d"].map(option => {
                                    const currQuestion = quizData[question]
                                    return <li key={option}>
                                        <input type="radio" id={option} name="options" onChange={handleChange} checked={currChoise === option} />
                                        <label htmlFor={option}>{currQuestion[option as keyof typeof currQuestion]}</label>
                                    </li>
                                })
                            }
                        </ul>
                        <button type='submit'>Submit</button>
                    </form>
            }

        </main>
    )
}

export default QuizApp;
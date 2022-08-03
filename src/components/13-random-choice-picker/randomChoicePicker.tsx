import { FC, useState, ChangeEvent, KeyboardEvent } from 'react';

interface ITags {
    val: string,
    highlight: boolean,
}

const RandomChoicePicker: FC = () => {
    const [inputs, setInput] = useState("");
    const [tags, setTags] = useState([] as ITags[]);
    const [isTyping, setIsTyping] = useState(true);

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        if (!isTyping) { return };

        if (!inputs) {
            setTags([])
        }
        setInput(value);
        setTags(value.split(',')
            .filter(v => v.trim().length > 0)
            .map(v => ({ val: v, highlight: false })))
    }

    const handleEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            setIsTyping(!isTyping);
            setInput('');
            setTimeout(() => {
                setIsTyping(true)
            }, 100)
            randomPick();
        }
    }

    const randomPick = () => {
        const interval = setInterval(() => {
            const idx = Math.floor(Math.random() * tags.length)
            setTags([...tags.slice(0, idx), { val: tags[idx].val, highlight: true }, ...tags.slice(idx + 1)]);
        }, 100)

        setTimeout(() => {
            clearInterval(interval);
        }, 3000)
    }

    return (
        <main className='randomChoicePicker__container'>
            <h3>Enter all of the choices divided by a comman (','). <br />Please enter when you're done</h3>
            <textarea
                value={inputs}
                onChange={handleInput}
                onKeyDown={handleEnter}
                placeholder='Enter choices here...' />
            <div className='choices'>
                {tags.map((choice, i) => (
                    <div key={choice.val + i} className={'choice ' + (choice.highlight ? 'highlight' : "")}>{choice.val}</div>
                ))}
            </div>
        </main>
    );
}

export default RandomChoicePicker;
import { FC, useState, ChangeEvent } from 'react';
import useCopyToClipboard from '../../Hooks/copyToclipboard/copyToclipboard';

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const RandomFucs = {
    "lowercase": getRandomLower,
    "uppercase": getRandomUpper,
    "numbers": getRandomNumber,
    "symbols": getRandomSymbol
}

const PasswordGenerator: FC = () => {
    const copy = useCopyToClipboard();
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState({
        password_length: 20,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });

    const handleCopy = () => {
        copy(password)
            .then(res => {
                if (res) {
                    alert(`Password copied to clipboard!`);
                } else {
                    alert(`Copy Password failed`)
                }
            })
    }

    const handleGenerator = () => {
        const { password_length, uppercase, lowercase, numbers, symbols } = conditions;

        const hasType = uppercase || lowercase || numbers || symbols;
        const typeArr = [{ uppercase }, { lowercase }, { numbers }, { symbols }].filter(e => Object.values(e)[0]);

        if (!hasType) { 
            setPassword("");
            return
        };

        let newPassword = "";
        for (let i = 0; i < password_length; i++) {
            const idx = Math.floor(Math.random() * typeArr.length);
            const fn = Object.keys(typeArr[idx])[0];
            newPassword += RandomFucs[fn as keyof typeof RandomFucs]();
        }
        setPassword(newPassword);
    }

    const handleConditions = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, checked } = e.currentTarget;
        if (id === 'password_length') {
            setConditions(prev => ({ ...prev, [id]: +value }));
        } else {
            setConditions(prev => ({ ...prev, [id]: checked }));
        }
    }

    return (
        <main className='passwordGenerator__container'>
            <div className='passwordGenerator__content'>
                <h2>Password Generator</h2>
                <div className='result__container'>
                    <span>{password}</span>
                    <button onClick={handleCopy}>
                        <i className="far fa-clipboard"></i>
                    </button>
                </div>
                <label>
                    Password length
                    <input
                        id='password_length'
                        type='number'
                        min={4}
                        max={20}
                        onChange={handleConditions}
                        value={conditions.password_length}
                    />
                </label>
                <label>
                    Include uppercase letters
                    <input
                        id='uppercase'
                        type='checkbox'
                        onChange={handleConditions}
                        checked={conditions.uppercase} />
                </label>
                <label>
                    Include lowercase letters
                    <input
                        id='lowercase'
                        type='checkbox'
                        onChange={handleConditions}
                        checked={conditions.lowercase} />
                </label>
                <label>
                    Include numbers
                    <input
                        id='numbers'
                        type='checkbox'
                        onChange={handleConditions}
                        checked={conditions.numbers} />
                </label>
                <label>
                    Include symbols
                    <input
                        id='symbols'
                        type='checkbox'
                        onChange={handleConditions}
                        checked={conditions.symbols} />
                </label>
                <button onClick={handleGenerator}>Generate Password</button>
            </div>
        </main>
    )
}

export default PasswordGenerator;
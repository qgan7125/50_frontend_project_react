import { ChangeEvent, FC, useState, KeyboardEvent, useRef } from 'react';

type Tcodes = {
    id: string,
    value: string
}[]

const VerifyAccountUI: FC = () => {
    const [codes, setCode] = useState<Tcodes>([
        {
            id: "digit1",
            value: ""
        },
        {
            id: "digit2",
            value: ""
        },
        {
            id: "digit3",
            value: ""
        },
        {
            id: "digit4",
            value: ""
        },
        {
            id: "digit5",
            value: ""
        },
        {
            id: "digit6",
            value: ""
        }
    ])

    const digitRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const idx = codes.findIndex(code => code.id === id);
        const newCodes = [...codes.slice(0, idx), { ...codes[idx], value: value }, ...codes.slice(idx + 1)] as Tcodes;
        setCode(newCodes)
    }

    const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
        const { id } = e.target;
        const idx = codes.findIndex(code => code.id === id);
        if (+e.key >= 0 && +e.key <= 9) {
            if (idx === 5) {
                return
            }
            if (digitRef.current) {
                setTimeout(() => {
                    digitRef.current[idx + 1].focus();
                }, 10)
            }
        }

        if (e.key === "Backspace") {
            if (idx === 0) {
                return
            }
            if (digitRef.current) {
                setTimeout(() => {
                    digitRef.current[idx - 1].focus();
                }, 10)
            }
        }
    }

    return (
        <main className='verifyAccount__container'>
            <div className='verifyAccount__content'>
                <h2>Verify Your Account</h2>
                <p>We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to confirm your email address.</p>
                <div className="code-container">
                    {
                        codes.map((e, i) => {
                            return <input
                                key={e.id}
                                id={e.id}
                                ref={e => (digitRef.current[i] = e as HTMLInputElement)}
                                type="text"
                                maxLength={1}
                                className='code'
                                placeholder='0'
                                value={e.value || ""}
                                onChange={handleChange}
                                onKeyDown={handleKey}
                                autoFocus={i === 0}
                                required />
                        })
                    }
                </div>
                <small className="info">
                    This is design only. We didn't actually send you an email as we don't have your email, right?
                </small>
            </div>
        </main>
    )
}

export default VerifyAccountUI;
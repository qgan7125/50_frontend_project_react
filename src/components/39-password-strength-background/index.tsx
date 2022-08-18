import { ChangeEvent, FC, useState, useRef } from 'react';

const PassordStrengthBackground: FC = () => {
    const [inputs, setInput] = useState({
        email: "",
        password: ""
    });
    const bgRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInput(prev => ({...prev, [id]: value}))
        if(id === "password" && bgRef.current) {
            bgRef.current.style.filter = `blur(${20 - value.length * 2}px)`;
        }
    }

    return (
        <main className='passwordsStrength__container'>
            <div className="background" id="background" ref={bgRef}></div>
            <div className="bg-white rounded p-10 text-center shadow-md">
                <h1 className="text-3xl">Image Password Strength</h1>
                <p className="text-sm text-gray-700">Change the password to see the effect</p>
                <div className="my-4 text-left">
                    <label htmlFor="email" className="text-gray-900">Email:</label>
                    <input
                        type="text"
                        className="border block w-full p-2 mt-2 rounded"
                        id="email"
                        placeholder="Enter Email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="my-4 text-left">
                    <label htmlFor="email" className="text-gray-900">Password:</label>
                    <input
                        type="password"
                        className="border block w-full p-2 mt-2 rounded"
                        id="password"
                        placeholder="Enter Password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </main>
    )
}

export default PassordStrengthBackground;
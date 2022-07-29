import { useState } from 'react';

const ProgressStep = () => {
    const [step, setStep] = useState(1);
    const prevDisable = step === 1;
    const nextDisable = step === 4;

    const handleClick = (i) => {
        setStep(prevStep => prevStep + i)
    }

    const isActive = (id) => "step " + (step >= id ? "active" : "");

    return (
        <div className='pregressStep__container'>
            <div className='pregressStep__container--progress'>
                <div className='pregressStep__Pregress'> </div>
                <div className='pregressStep__Pregress-fill' style={{ width: (step - 1) * 33 + "%" }}> </div>
                <div className={isActive(1)}>1</div>
                <div className={isActive(2)}>2</div>
                <div className={isActive(3)}>3</div>
                <div className={isActive(4)}>4</div>
            </div>
            <div>
                <button
                    className='btn'
                    onClick={() => handleClick(-1)}
                    disabled={prevDisable}>Prev</button>
                <button
                    className='btn'
                    onClick={() => handleClick(1)}
                    disabled={nextDisable}>Next</button>
            </div>
        </div>
    )
}

export default ProgressStep;
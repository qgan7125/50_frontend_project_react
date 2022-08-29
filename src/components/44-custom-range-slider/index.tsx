import { ChangeEvent, FC, useState } from "react";

const CustomRangeSlider: FC = () => {
    const [rangeValue, setRangeValue] = useState(50);

    const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setRangeValue(+value);
    }

    return (
        <main className="rangeSlider__container">
            <section className="rangeSlider__content">
                <h2>Custom Range Slider</h2>
                <div className="range__container">
                    <input type="range" id="range" min="0" max="100" value={rangeValue} onChange={handleRange} />
                    <label htmlFor="range" style={{ left: `calc( ${rangeValue}% - 40px + 12px * ${(50 - +rangeValue) / 50})` }}>{rangeValue}</label>
                </div>
            </section>
        </main>
    )
}

export default CustomRangeSlider;
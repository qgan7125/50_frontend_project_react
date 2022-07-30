import { FC, useState } from 'react';

const bgs = ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80']

const BackgroundSlider:FC = () => {
    const [bg, setBg] = useState(0);

    const handleClick = (n: number) => {
        setBg(prevBg => ((prevBg + n) % bgs.length));
    }

    return (
        <div className='backgroundSlider__container' style={{ backgroundImage: `url(${bgs[bg]})` }}>
            <div className="backgroundSlider__content" >
                <div className="backgroundSlider__slice" style={{ backgroundImage: `url(${bgs[bg]})` }}></div>
                <button
                    className="arrow left-arrow"
                    id="left"
                    onClick={() => handleClick(-1)}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button
                    className="arrow right-arrow"
                    id="right"
                    onClick={() => handleClick(1)}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default BackgroundSlider;
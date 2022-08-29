import { FC, useState, MouseEvent } from 'react';

const REVIEW = [
    {
        name: "Unhappy",
        image: "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
    },
    {
        name: "Neutral",
        image: "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
    },
    {
        name: "Satisfied",
        image: "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
    }
]

const FacebookUIDesign: FC = () => {
    const [review, setReview] = useState("Satisfied");
    const [submit, setSubmit] = useState(false);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget;
        setReview(id);
    }

    const handleSubmit = () => {
        setSubmit(true);
    }

    return (
        <main className='facebookUI__container'>
            <div id="panel" className="panel-container">
                {
                    !submit ?
                        <>
                            <strong>How satisfied are you with our <br /> customer support performance?</strong>
                            <div className="ratings-container">
                                {
                                    REVIEW.map(rev => (
                                        <div id={rev.name} key={rev.name} className={"rating" + (review === rev.name ? " active" : "")}
                                            onClick={handleClick}>
                                            <img src={rev.image} alt={rev.name} />
                                            <small>{rev.name}</small>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className="btn" id="send" onClick={handleSubmit}>Send Review</button>
                        </>
                        :
                        <>
                            <i className="fas fa-heart"></i>
                            <strong>Thank You!</strong>
                            <br />
                            <strong>Feedback: {review}</strong>
                            <p>We'll use your feedback to improve our customer support</p>
                        </>
                }

            </div>
        </main>
    )
}

export default FacebookUIDesign;
import React, { useState, useEffect } from 'react';
import './contentPlaceholder.css';

const DATA = {
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
    title: 'Lorem ipsum dolor sit amet',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
    profile: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: "John Doe",
    date: "Oct 08, 2020"
}

const ContentPlaceholder = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(DATA);
            setLoading(false);
        }, 2500)
    }, []);
    
    return (
        <div className='contentPlaceholder__container'>
            <div className='contentPlaceholder__card'>
                <div className={'card__header' + (loading ? ' animated-bg' : "")}>
                    {data.image && <img src={data.image} alt="" />}
                </div>
                <div className='card__content'>
                    <h3 className={'card__title' + (loading ? ' animated-bg' : "")}>{data.title ? data.title : <>&nbsp;</>}</h3>
                    <p className='card__excerpt' >
                        {
                            loading ?
                                <>
                                    <span className='animated-bg animated-bg-text'>&nbsp;</span>
                                    <span className='animated-bg animated-bg-text'>&nbsp;</span>
                                    <span className='animated-bg animated-bg-text'>&nbsp;</span>
                                </>
                                :
                                data.excerpt
                        }
                    </p>
                    <div className='card__author'>
                        <div className={'card__author--profile' + (loading ? ' animated-bg' : "")}>
                            {data.profile && <img src={data.profile} alt="" />}
                        </div>
                        <div className='card__author--info'>
                            <strong>
                                {loading ?
                                    <span className='animated-bg animated-bg-text'>&nbsp;</span>
                                    :
                                    data.name}
                            </strong>
                            <small>
                                {loading ?
                                    <span className='animated-bg animated-bg-text'>&nbsp;</span>
                                    :
                                    data.date}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPlaceholder;
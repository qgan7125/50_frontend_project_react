import { ChangeEvent, FC, useEffect, useState } from 'react';
import UserInfo from './userInfo';


const API = 'https://randomuser.me/api?results=50';

const LiveUserFilter: FC = () => {
    const [userList, setUserList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            fetch(API).then(res => res.json()).then(res => setUserList(res.results))
        })()
    }, [])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setSearch(value);
    }

    return (
        <main className='liveUser__container'>
            <section className="liveUser__content">
                <header>
                    <h3>Live User Filter</h3>
                    <small>Search by name and/or location</small>
                    <input placeholder='Search' onChange={handleInput} value={search} />
                </header>

                <ul className='user-list'>
                    {
                        userList.length ?
                            userList.filter(user => {
                                if (!search) { return true }

                                const { name: { first, last }, location: { city, country } } = user;

                                const allText = [first, last, city, country].join(" ");

                                if (!allText.toLowerCase().includes(search.toLocaleLowerCase())) { return false }
                                return true
                            })
                                .map((user, i) => {
                                    const { name: { first, last }, picture: { large: image }, location: { city, country } } = user;
                                    const props = {
                                        image: image,
                                        firstName: first,
                                        lastName: last,
                                        city: city,
                                        country: country
                                    }
                                    return <li key={i}>
                                        <UserInfo {...props} />
                                    </li>
                                })
                            :
                            <li>Loading...</li>
                    }
                </ul>
            </section>
        </main>
    )
}

export default LiveUserFilter;
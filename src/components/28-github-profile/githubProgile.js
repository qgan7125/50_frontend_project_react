import React, { useState } from 'react';
import './githubProfile.css';

const APIURL = 'https://api.github.com/users/'
const GithubProfile = () => {

    const [input, setInput] = useState("");
    const [profile, setProfile] = useState({});
    const [error, setError] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(input)
        getRopos(input)
        setInput("")
    }

    const handleExpanded = () => {
        setExpanded(!expanded);
    }

    const getUser = async (username) => {
        await fetch(APIURL + username)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                throw new Error(`Error! status: ${res.status}`);
            })
            .then(res => {
                setProfile(prevProfile => ({
                    ...prevProfile,
                    Name: res.name || res.login,
                    Bio: res.bio,
                    avatar: res.avatar_url,
                    Followers: res.followers,
                    Following: res.following,
                    Repos: res.public_repos
                }))
                setError(false);
            }).catch((error) => {
                console.log(error)
                setError(true);
            })
    }

    const getRopos = async (username) => {
        await fetch(APIURL + username + '/repos?sort=created')
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                throw new Error(`Error! status: ${res.status}`);
            })
            .then(res => {
                const repos = res?.map(repo => ({
                    href: repo.html_url,
                    name: repo.name
                }))
                setProfile(prevProfile => ({ ...prevProfile, reposList: repos }));
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='githubProfile__container'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInput}
                    value={input}
                    placeholder='Search to a Github user' />
            </form>
            <main>
                {Object.keys(profile).length > 0 && <div className='githubProfile__content'>
                    <img src={profile.avatar} alt='avatar' />
                    <div className='profile__info'>
                        <h1>{profile.Name}</h1>
                        <p>{profile.Bio}</p>
                        <div className='repo__info'>
                            <span>{profile.Followers || 0} Followers</span>
                            <span>{profile.Following || 0} Following</span>
                            <span>{profile.Repos || 0} Repos</span>
                        </div>
                        <div className='repos__info'>
                            {profile.reposList?.slice(0, expanded ? profile.reposList.length : 5).map(repo => (
                                <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer" >{repo.name} </a>
                            ))}
                        </div>
                        {profile.reposList?.length > 5  && <button className='btn' onClick={handleExpanded}>{expanded ? "Expanded Less" : "Expanded More"}</button>}
                    </div>
                </div>}
                {error && <div className='githubProfile__error'>No profile with this username</div>}
            </main>
        </div>
    )
}

export default GithubProfile;
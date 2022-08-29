import { FC } from 'react';

interface IUserInfo {
    image: string,
    firstName: string,
    lastName: string,
    city: string,
    country: string
}

const UserInfo: FC<IUserInfo> = ({ image, firstName, lastName, city, country }) => {

    return (
        <div className='user__info'>
            <img src={image} alt={firstName} />
            <div>
                <h4>{firstName} {lastName}</h4>
                <p>{city} {country}</p>
            </div>
        </div>)
}

export default UserInfo;
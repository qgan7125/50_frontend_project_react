import { FC, useState } from 'react';
import logo from "./Netflix_Logo_RGB.png";

const NetflixMobileNavigation: FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <main className='netflix__container'>
            <i id="btn__sideBar" className='fas fa-bars' onClick={handleOpen}></i>
            <img src={logo} alt="Netflix logo" width={300} />
            <h3>MOBILE NAVIGATION</h3>

            <aside className={'sidebar' + (open ? " active" : "")}>
                <div className='layer layer1'></div>
                <div className='layer layer2'></div>
                <div className='layer layer3'>
                    <div className='sidebar__container'>
                        <button className='btn__close' onClick={handleClose}>&times;</button>
                        <img src={logo} alt="Netflix logo" width={100} />
                        <ul className='sidebar__list'>
                            <li>Teams</li>
                            <li>Locations</li>
                            <li>Life at netflix</li>
                            <li>
                                <ul>
                                    <li>NETFLIX CULTURE MEMO</li>
                                    <li>WORK LIFE BALANCE</li>
                                    <li>INCLUSION & DIVERSITY</li>
                                    <li>BLOG</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </main>
    )
}

export default NetflixMobileNavigation;
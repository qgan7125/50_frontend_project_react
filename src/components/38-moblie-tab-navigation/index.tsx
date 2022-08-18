import { FC, useState, MouseEvent } from 'react';

const ELEMENTS = [
    {
        name: "Home",
        img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        sign: "fa-home"
    },
    {
        name: "Work",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        sign: "fa-box"
    },
    {
        name: "Blog",
        img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
        sign: "fa-book-open"
    },
    {
        name: "About Us",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        sign: "fa-users"
    }
]

interface IMobileTabNavigation {
    elements?: {
        name: string,
        img: string,
        sign: string
    }[]
}

const MobileTabNavigation: FC<IMobileTabNavigation> = ({ elements = ELEMENTS }) => {
    const [tabs, setTabs] = useState(elements.map((e, i) => ({ ...e, active: !i ? true : false })));

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        const { id } = e.currentTarget;
        const newTabs = [...tabs.map(t => {
            if(t.name === id ){
                return {...t, active: true}
            }

            return {...t, active: false}
        })]
        setTabs(newTabs);
    }

    return (
        <main className='phone__container'>
            <div className="phone">
                {
                    tabs.map(e => (
                        <img key={e.name} src={e.img} alt={e.name} className={"content" + (e.active ? " show" : "")} />
                    ))
                }
                <nav>
                    <ul>
                        {
                            tabs.map(e => (
                                <li key={e.name} className={e.active ? "active" : ""} id={e.name} onClick={handleClick}>
                                    <i className={`fas ${e.sign}`} />
                                    <p>{e.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </main>
    )
}

export default MobileTabNavigation;
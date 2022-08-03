import { FC, useEffect, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar: FC = () => {
    const routePath = useLocation();
    const navigate = useNavigate();

    const scrollToProjects = (e: MouseEvent) => {
        e.preventDefault();
        const projects = document.querySelector(".projects__container");
        projects?.scrollIntoView({ behavior: "smooth" });
    }

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        return navigate("/");
    }

    useEffect(() => {
    }, [routePath]);

    return (
        <header>
            <nav className='navHome__container'>
                <ul>
                    <li>
                        <a href='/#' onClick={handleClick}>Home</a>
                    </li>
                    {
                        routePath.pathname.length === 1 ?
                            <li>
                                <a href='/#' onClick={scrollToProjects}>Projects</a>
                            </li>
                            :
                            null
                    }
                    <li>
                        <a
                            href='https://github.com/qgan7125/50_frontend_project_react'
                            target='_blank'
                            rel="noreferrer">Github
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
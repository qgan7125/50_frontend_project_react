const NavBar = () => {

    const scrollToProjects = (e) => {
        e.preventDefault();
        const projects = document.querySelector(".projects__container");
        projects.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className='navHome__container'>
            <ul>
                <li>
                    <a href='/#'>Home</a>
                </li>
                <li>
                    <a href='/#' onClick={scrollToProjects}>Projects</a>
                </li>
                <li>
                    <a
                        href='https://github.com/qgan7125/50_frontend_project_react'
                        target='_blank'
                        rel="noreferrer">Github
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
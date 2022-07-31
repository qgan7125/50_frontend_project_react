import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const RotationNavAnimation: FC = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    const handleNavLink = (e: MouseEvent) => {
        e.preventDefault();
        return navigate("/03RotationNavAnimation");
    }
    return (
        <div className='nav__container'>
            <div className={'container' + (toggle ? " show-nav" : "")} >
                <div className='nav__Circle--container'>
                    <div className={'nav__Circle ' + (toggle ? "show-nav" : "")}>
                        <button
                            id="open"

                            onClick={handleClick}>
                            &equiv;
                        </button>
                        <button
                            id="close"
                            onClick={handleClick}>
                            &times;
                        </button>
                    </div>
                </div>
                <div className="content" >
                    <h1>Amazing Article</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

                    <h3>My Dog</h3>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
                </div>
            </div>
            <nav className={toggle ? "show-nav" : ""}>
                <ul>
                    <li><a href="/#" onClick={handleNavLink}><i className="fas fa-home"></i> HOME</a></li>
                    <li className={toggle ? "show-nav" : ""}><a href="/#" onClick={handleNavLink}><i className="fas fa-user-alt"></i> ABOUT</a></li>
                    <li className={toggle ? "show-nav" : ""}><a href="/#" onClick={handleNavLink}><i className="fas fa-envelope"></i> CONTACT</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default RotationNavAnimation;
import { Logo } from "../Logo"

const Navigation = ({ brand }) => {
    return (
        <nav className="navigation">
            <div className="navigation__brand">
                <Logo />
                <span>{brand}</span>
            </div>
            <div className="navigation__items">
                <a
                    className="link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
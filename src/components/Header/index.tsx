import { Link } from 'react-router-dom';
import './styles.scss';

type headerProp = {
    currentPage: string;
};

export function Header ({currentPage}: headerProp) {

    const linkStyle = {
        textDecoration: 'none',
        //color: '#fff',
        color: 'rgba(255, 255, 255, 0.45)',
    };

    const linkStyleCurrentPage = {
        textDecoration: 'none',
        color: '#fff',
        //textShadow: '0 0 21px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff, 0 0 102px #fff, 0 0 151px #fff'
    };

    return (
        <header>
            <Link style={currentPage === 'home' ? linkStyleCurrentPage : linkStyle} to="/">Home</Link>
            <Link style={currentPage === 'about' ? linkStyleCurrentPage : linkStyle} to="/about">About</Link>
            <Link style={currentPage === 'projects' ? linkStyleCurrentPage : linkStyle} to="/projects">Projects</Link>
            <Link style={currentPage === 'social' ? linkStyleCurrentPage : linkStyle} to="/social">Social</Link>
        </header>
    );
};
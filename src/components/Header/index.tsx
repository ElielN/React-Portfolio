import { Link } from 'react-router-dom';
import './styles.scss';

export function Header () {

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    };

    return (
        <header>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
            <Link style={linkStyle} to="/projects">Projects</Link>
            <Link style={linkStyle} to="/social">Social</Link>
        </header>
    );
};
import '../styles/navbar.css';

export default function Navbar(props) {
    return(
        <nav>
            <ul>
                <li><a href="/">&lt;about-me&gt;</a></li>
                <li><a href="/experience">&lt;experience&gt;</a></li>
                <li><a href="/projects">&lt;projects&gt;</a></li>
                <li><a href="/contact">&lt;contact&gt;</a></li>
            </ul>
            {props.children}
        </nav>
    );
}
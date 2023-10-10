import '../styles/navbar.css';
// import reactLogo from './assets/react.svg'

export default function Navbar(props) {
    return(
        <nav>
            <h4>Ashley Yetman</h4>
            {/* <img src={reactLogo} className="logo" alt="React logo" /> */}
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
            {props.children}
        </nav>
    );
}
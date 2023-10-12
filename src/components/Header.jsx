import '../styles/header.css';
// import reactLogo from './assets/react.svg'

export default function Header(props) {
    return(
        <div className='header-bg'>
            <div className='header-wrapper'>
                <div className='header'>
                    <div>
                        <h3>&lt;Alchamyst/&gt;</h3>
                        <h4>Ashley Yetman</h4>
                    </div>            
                    {/* <img src={reactLogo} className="logo" alt="React logo" /> */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}
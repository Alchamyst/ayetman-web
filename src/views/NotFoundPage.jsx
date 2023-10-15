import '../styles/notFoundPage.css';

export default function ErrorPage() {
    return(
        <div className='main'>
            <main>
                <h1>Oops!</h1>
                <p>The page you were looking for does not exist.</p>
                Return to the <a href="/">HomePage &#187;</a>
            </main>
        </div>
    );
}
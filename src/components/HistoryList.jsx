import '../styles/historyList.css';

export default function HistoryList(props) {
    return(
        <div className='history-list'>
            <p>This is my HistoryList component.</p>
            <p>Props test of array item [0]:</p>
            <ul>
                <li>organisation: {props.history[0].organisation}</li>  
                <li>designation: {props.history[0].designation}</li>
                <li>startYearMonth: {props.history[0].startYearMonth}</li>
                <li>endYearMonth: {props.history[0].endYearMonth}</li>
                <li>description: {props.history[0].description}</li>          
                
            </ul>
        </div>
    );
}
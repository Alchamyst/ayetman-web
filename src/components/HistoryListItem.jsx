import '../styles/historyListItem.css';

export default function HistoryListItem(props) {
    return (
        <div className='history-list-item'>
            <p>This is my HistoryListItem component.</p>
            <ul>
                <li>organisation: {props.organisation}</li>  
                <li>designation: {props.designation}</li>
                <li>startYearMonth: {props.startYearMonth}</li>
                <li>endYearMonth: {props.endYearMonth}</li>
                <li>description: {props.description}</li>               
            </ul>
        </div>
    );
}
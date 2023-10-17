import { useState } from 'react';
import '../styles/historyListItem.css';

export default function HistoryListItem(props) {

    const [ isExpanded, setExpanded ] = useState(false);

    const handleContentExpansion = () => {
        if(isExpanded == true) return setExpanded(false);

        if(isExpanded == false){
            setExpanded(true);
        }
    }

    return (
        <div className='history-list-item'>
            <div className={`history-compact ${isExpanded ? "history-compact-expanded": ""}`} onClick={handleContentExpansion}>
                <div className={`expander${isExpanded ? "-open" : ""}`}>
                    {!isExpanded && <p>&#x25B6;</p>}
                    {isExpanded && <p>&#x25BC;</p>}
                </div>
                <div className='history-titles'>
                    <p className='history-designation'>{props.designation}</p>
                    <p className='history-organisation'>{props.organisation}</p>
                </div>
                <div className='history-dates'>
                    <p className='history-start-date'>{props.startYearMonth}</p>
                    <p className='history-end-date'>{props.endYearMonth}</p>
                </div>
            </div>
            {isExpanded && <div className='history-expanded'>
                <div className='history-description'>
                    <p>{props.description}</p>
                </div>
            </div>}
        </div>
    );
}
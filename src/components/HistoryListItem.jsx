import { useState } from 'react';
import '../styles/historyListItem.css';

export default function HistoryListItem(props) {

    const handleOnClick = () => {
        if (props.isExpanded == true){
            props.setActivePanel(0)
        }
        if (props.isExpanded == false){
            props.setActivePanel(props.id)
        }
    }

    return (
        <div className='history-list-item'>
            <div className={`history-compact ${props.isExpanded ? "history-compact-expanded": ""}`} onClick={handleOnClick}>
                <div className={`expander${props.isExpanded ? "-open" : ""}`}>
                    {!props.isExpanded && <p>&#x25B6;</p>}
                    {props.isExpanded && <p>&#x25BC;</p>}
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
            {props.isExpanded && <div className='history-expanded'>
                <div className='history-description'>
                    <p>{props.description}</p>
                </div>
            </div>}
        </div>
    );
}
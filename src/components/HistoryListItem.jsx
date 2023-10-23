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
                <div className={`expander ${props.isExpanded ? "expander-open" : ""}`}>
                    {!props.isExpanded && <span className='right-pointing-triangle' />}
                    {props.isExpanded && <span className='down-pointing-triangle' />}
                </div>
                <div className='history-compact-wrapper'>

                    <div className='history-titles'>
                        <p className='history-designation'>{props.designation}</p>
                        <p className='history-organisation'>{props.organisation}</p>
                    </div>
                     <div className='history-dates'>
                        <p className='history-end-date'>{new Date(props.endDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                        <p className='history-start-date'>{new Date(props.startDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                        <p className='history-end-date-short'>{new Date(props.endDate).toLocaleString('default', { month: 'numeric', year: 'numeric' })}</p>
                        <p className='history-start-date-short'>{new Date(props.startDate).toLocaleString('default', { month: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
            </div>
            {props.isExpanded && <div className='history-expanded'>
                <div className='history-description'>
                    <div className='history-description-dates'>
                        <p className='hist-desc-left'>Starting: {new Date(props.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })}</p>
                        <p className='hist-desc-right'>Ending: {new Date(props.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })}</p>
                    </div>
                    <p className='hist-desc-01'>{props.description1}</p>
                    {props.description2 && <p className='hist-desc-02'>{props.description2}</p>}
                </div>
            </div>}
        </div>
    );
}
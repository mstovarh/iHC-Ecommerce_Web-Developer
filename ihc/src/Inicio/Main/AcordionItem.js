import React from 'react';
import './acordionItem.css'

function AcordionItem(props){
    return(
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed st-but m-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={props.dataBsTargetAI}
                        aria-expanded="false"
                        aria-controls={props.arialControlsAI}
                    >  
                        <h4>{props.nameAI}</h4>
                    </button>
                </h2>
                <div
                id={props.idAI}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body st-but-in">
                        {props.textAI}
                    </div>
                </div>
            </div>
        </>
    );
}

export {AcordionItem};
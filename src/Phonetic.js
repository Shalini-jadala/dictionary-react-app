import React from "react";


export default function Phenotic(props){
    return(
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank"
               rel="noopener noreferrer">
                Listen
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );
}

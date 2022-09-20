import React from "react";
import {useState} from "react";
import "./styles/StaticRows.css"

import dataFile from "../dataFile";


function StaticRows(props) {

    const [value, setValue] = useState(dataFile)

    function handleChange(e) {
        setValue(prev => ({
                ...prev,
                [props.name]: e.target.value

            }
        ))

    }

    return (

        <div className={!props.state ? "static-rows--container" : "static-rows--container-other"}>
            <p className={!props.state ? "static-rows--content" : "static-rows--content-bool"}>{props.event}</p>
            <input
                required
                type="text"
                name={props.name}
                className={!props.state ? "static-rows--input" : "bool-rows--input"}
                value={props.title.title}
                onChange={
                    (e) => handleChange(e)
                }
            ></input>

        </div>

    );
}

export default StaticRows;

import React from "react";
import {useState} from "react";
import "./UI_styles/Rows.css";
import dataFile from "../dataFile";
import PortFunc from "./PortFunc";


function StaticRows(props) {

    const [value, setValue] = useState(dataFile)

    function handleChange(e) {
        setValue(prev => ({
                ...prev,
                [e.target.name]: e.target.value

            }
        ))

    }

    return (

        <div className="ListForm">

                <textarea
                    readOnly="readonly"
                    type="text"
                    name="event"
                    className="box event padding--first"
                    value={props.event}

                ></textarea>
            <textarea
                name="contact"
                className="box contact form-control"
                value={props.contact.contact}
                type="text"
                onChange={handleChange}
                style={{background:"black",color:"rgb(90, 202, 250)"}}
            ></textarea>
            <textarea
                name="title"
                className="box title form-control"
                value={props.title.title}
                type="text"
                onChange={(e)=>{handleChange(e)}}
                style={{background:"black",color:"rgb(90, 202, 250)"}}
            ></textarea>


            <PortFunc

                portState = {props.portState}
                setPortState = {props.portStateFunc}
            ></PortFunc>


        </div>

    );
}

export default StaticRows;

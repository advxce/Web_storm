import React from "react";
import {useState} from "react";
import "./UI_styles/Rows.css";
import PortFunc from "./PortFunc";

function DynamicRows(props) {


    const [value, setValue] = useState(
        [{
            num: 2,
            event: props.mainName,
            contact: "",
            title: "",
            id: Date.now(),
        }],
    );

    let handleChange = (i, e) => {
        let newRowValues = [...value];
        newRowValues[i][e.target.name] = e.target.value;
        setValue(newRowValues);
        console.log(e.target.value);
    };

    const [count, setCount] = useState(1);


    function addRow(event) {

        event.preventDefault();
        setCount(count => count + 1);

        setValue(prev => [

                ...prev,
                {

                    num: 3,
                    event: `${props.sectionName} ${count}`,
                    contact: "",
                    title: "",
                    id: Date.now()
                }
            ]
        );
    }


    function removeRow(i) {
        let newRowValues = [...value];

        newRowValues.splice(i, 1);
        setValue(newRowValues);
        setCount(1);
    }


    return (
        <div >
            {value.map((element, index) => (
                <div className=" ListForm" key={index}>

                    <textarea
                        readOnly
                        type="text"
                        name="event"
                        value={element.event}
                        className="box event "

                    ></textarea>
                    <textarea
                        name="contact"
                        className="box contact form-control"
                        type="text"
                        value={element.contact}
                        onChange={(e) => handleChange(index, e)}
                        style={{background:"black",color:"rgb(90, 202, 250)"}}
                    ></textarea>
                    <textarea
                        name="title"
                        className="box title form-control"
                        value={element.title}
                        type="text"
                        onChange={(e) => handleChange(index, e)}
                        style={{background:"black",color:"rgb(90, 202, 250)"}}
                    ></textarea>
                    <PortFunc
                        portState = {props.portState}
                        setPortState = {props.portStateFunc}
                    ></PortFunc>

                    <button className="btn btn-outline-info"
                            onClick={addRow}
                    >
                        +
                    </button>
                    {element.num !== 2 ? (
                        <button
                            type="button"
                            className=" btn btn-outline-info"
                            onClick={() => removeRow(index)}
                        >
                            -
                        </button>
                    ) : null}
                </div>
            ))
            }
        </div>
    );
}

export default DynamicRows;

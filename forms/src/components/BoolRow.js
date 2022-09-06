import React from "react";
import {useState} from "react";
import "./UI_styles/Rows.css";
import StaticRows from "./StaticRows";
import PortFunc from "./PortFunc";

function BoolRow(props) {
    const [value, setValue] = useState([
        {

            event:
                "Наличие / отсутствие серверов ПАКС клиники (модель ПАКС системы, емкость сервера)",
            contact: "",
            title: "",
        },
    ]);

    let handleChange = (i, e) => {
        let newRowValues = [...value];
        newRowValues[i][e.target.name] = e.target.value;
        setValue(newRowValues);
        console.log(e.target.value);
    };


    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);

    };


    return (
        <div>
            <div className="">
                {value.map((element, index) => (
                    <div className="ListForm" key={index}>

                        <div className="box event" onClick={checkHandler}>
                            <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                name="check"
                                id="check"
                                checked={isChecked}
                                onChange={checkHandler}
                            />
                            <textarea
                                readOnly
                                className="row7  "

                                name="event"
                                value={element.event}
                            ></textarea>
                        </div>

                        <textarea
                            name="contact"
                            className="box contact form-control"
                            value={element.contact}
                            type="text"
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
                    </div>
                ))}
            </div>
            {isChecked === true ? (
                <div>
                    <StaticRows
                        event="Ёмкость"
                        contact=""
                        title=""
                    ></StaticRows>
                    <StaticRows
                        event="Модель"
                        contact=""
                        title=""
                    ></StaticRows>
                </div>
            ) : null}
        </div>
    );
}

export default BoolRow;

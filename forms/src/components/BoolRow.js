import React from "react";
import {useState} from "react";
import "./styles/BoolRow.css"
import StaticRows from "./StaticRows";


function BoolRow(props) {
    const [value, setValue] = useState([{

        event: "Наличие / отсутствие серверов ПАКС клиники (модель ПАКС системы, емкость сервера)",
    },]);

    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);

    };

    const style1 = {
        background: "#88bbbe",

    }

    const style2 = {
        background: "#679B9E",
        justifyContent: "flex-end",
    }

    return (

        <div className="bool-main--container">
            {value.map((element, index) => (<div className="bool-inside--container" key={index}>
                <p
                    className="static-rows--content "
                >{element.event}</p>
                <div className="toggle--container">
                    <div
                        className="switch--container"
                        style={!isChecked ? style1 : style2}
                        onClick={checkHandler}>
                        <div
                            className="switch--ball"></div>
                    </div>
                </div>
            </div>))}
            {isChecked === true ? (<div className="container-for-sub-rows">
                <StaticRows
                    name="capacity"
                    event="Ёмкость :"
                    title=""
                    state={true}
                ></StaticRows>
                <StaticRows
                    name="model"
                    event="Модель :"
                    title=""
                    state={true}
                ></StaticRows>
            </div>) : null}
        </div>


    );
}

export default BoolRow;

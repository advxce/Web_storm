import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

import ForRow7 from "./ForRow7";

function Row7({ number }) {
    const [value, setValue] = useState([
        {
            title1: 7,
            title2:
                "Наличие / отсутствие серверов ПАКС клиники (модель ПАКС системы, емкость сервера)",
            title3: "",
            title4: "",
            title5: "",
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
        if (isChecked === true) {
            console.log("alltrue");
        } else {
            console.log("nottrue");
        }
    };
    console.log(isChecked);

    return (
        <div>
            <div className="">
                {value.map((element, index) => (
                    <div className="ListForm" key={index}>
                        <input
                            readOnly
                            name="num8"
                            type="text"
                            className="box number "
                            value={element.title1}
                        ></input>
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

                                name="event8"
                                value={element.title2}
                            ></textarea>
                        </div>

                        <textarea
                            name="contact8"
                            className="box textbox contact form-control"
                            value={value.title3}
                            type="text"
                            onChange={(e) => handleChange(index, e)}
                        ></textarea>
                        <textarea
                            name="title8"
                            className="box textbox title form-control"
                            value={value.title4}
                            type="text"
                            placeholder="XXX.XXX.XXX.XXX"
                            onChange={(e) => handleChange(index, e)}
                        ></textarea>
                        <textarea
                            name="port8"
                            required
                            className="box textbox port form-control"
                            value={value.title5}
                            type="text"
                            placeholder="XXX.XXX.X.X"
                            onChange={(e) => handleChange(index, e)}
                        ></textarea>
                    </div>
                ))}
            </div>
            {isChecked === true ? (
                <div>
                    <ForRow7 number={7.1} name={"Ёмкость"}></ForRow7>
                    <ForRow7 number={7.2} name={"Модель"}></ForRow7>
                </div>
            ) : null}
        </div>
    );
}

export default Row7;

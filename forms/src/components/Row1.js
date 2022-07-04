import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row1({ number }) {
    const [value, setValue] = useState({
        title1: "",
        title2: "",
        title3: "",
    });

    return (

            <div className="ListForm">
                <input
                    readOnly="readonly"
                    type="text"
                    name="num2"
                    className="box number "
                    value={number}
                ></input>

                <textarea
                    readOnly="readonly"
                    type="text"
                    name="event2"
                    className="box event padding--first"
                    value=" Наименование медицинского учреждения"
                ></textarea>
                <textarea
                    name="contact2"
                    className="box contact form-control"
                    value={value.title1}
                    type="text"
                    onChange={(e) => setValue({ ...value, title1: e.target.value })}
                ></textarea>
                <textarea
                    name="title2"
                    className="box title form-control"
                    value={value.title2}
                    type="text"
                    placeholder="XXX.XXX.XXX.XXX"
                    onChange={(e) => setValue({ ...value, title2: e.target.value })}
                ></textarea>
                <textarea
                    required
                    name="port2"
                    className="box textbox port form-control"
                    value={value.title3}
                    type="text"
                    placeholder="XXX.XXX.X.X"
                    onChange={(e) => setValue({ ...value, title3: e.target.value })}
                ></textarea>
            </div>

    );
}

export default Row1;

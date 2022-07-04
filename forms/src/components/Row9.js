import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row9({ number }) {
    const [value, setValue] = useState({
        title1: "",
        title2: "",
        title3: "",
    });
    return (
        <div className="">
            <div className="ListForm">
                <input
                    readOnly
                    type="text"
                    name="num10"
                    className="box number "
                    value={number}
                ></input>
                <textarea
                    readOnly
                    name="event10"
                    className="box event "

                    value="Наименование используемой медицинской информационной системы"
                ></textarea>
                <textarea
                    name="contact10"
                    className="box textbox contact form-control"
                    value={value.title1}
                    type="text"
                    onChange={(e) => setValue({ ...value, title1: e.target.value })}
                ></textarea>
                <textarea
                    name="title10"
                    className="box textbox title form-control"
                    value={value.title2}
                    type="text"
                    placeholder="XXX.XXX.XXX.XXX"
                    onChange={(e) => setValue({ ...value, title2: e.target.value })}
                ></textarea>
                <textarea
                    required
                    name="port10"
                    className="box textbox port form-control"
                    value={value.title3}
                    type="text"
                    placeholder="XXX.XXX.X.X"
                    onChange={(e) => setValue({ ...value, title3: e.target.value })}
                ></textarea>
            </div>
        </div>
    );
}

export default Row9;

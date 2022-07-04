import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row5({ number }) {
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
                    name="num6"
                    className="box number "
                    value={number}
                ></input>
                <textarea
                    readOnly
                    type="text"
                    name="event6"
                    className="box event "

                    value=" Контактные данные специалиста по администрированию ЛВС, диагност. аппаратов для подключения в 3DMeD"
                ></textarea>
                <textarea
                    name="contact6"
                    className="box textbox contact form-control"
                    value={value.title1}
                    type="text"
                    onChange={(e) => setValue({ ...value, title1: e.target.value })}
                ></textarea>
                <textarea
                    name="title6"
                    className="box textbox title form-control"
                    value={value.title2}
                    type="text"
                    placeholder="XXX.XXX.XXX.XXX"
                    onChange={(e) => setValue({ ...value, title2: e.target.value })}
                ></textarea>
                <textarea
                    required
                    name="port6"
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

export default Row5;

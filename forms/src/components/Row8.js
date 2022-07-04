import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row8({ number }) {
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
                    name="num9"
                    type="text"
                    className="box number "
                    value={number}
                ></input>
                <textarea
                    readOnly
                    name="event9"
                    className="box event "

                    value=" Возможность создания удаленного доступа к существующему серверу ПАКС клиники"
                ></textarea>
                <textarea
                    name="contact9"
                    className="box textbox contact form-control"
                    value={value.title1}
                    type="text"
                    onChange={(e) => setValue({ ...value, title1: e.target.value })}
                ></textarea>
                <textarea
                    name="title9"
                    className="box textbox title form-control"
                    value={value.title2}
                    type="text"
                    placeholder="XXX.XXX.XXX.XXX"
                    onChange={(e) => setValue({ ...value, title2: e.target.value })}
                ></textarea>
                <textarea
                    name="port9"
                    required
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

export default Row8;

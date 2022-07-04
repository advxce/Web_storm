import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row4({ number }) {
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
                    name="num5"
                    className="box number "
                    value={number}
                ></input>
                <textarea
                    readOnly
                    type="text"
                    name="event5"
                    className="box event "
                    value=" Информация по каналу доступа в интернет (провайдер, скорость UP\DOWN,…)"
                ></textarea>
                <textarea
                    name="contact5"
                    className="box textbox contact form-control"
                    value={value.title1}
                    type="text"
                    onChange={(e) => setValue({ ...value, title1: e.target.value })}
                ></textarea>
                <textarea
                    name="title5"
                    className="box textbox title form-control"
                    value={value.title2}
                    type="text"
                    placeholder="XXX.XXX.XXX.XXX"
                    onChange={(e) => setValue({ ...value, title2: e.target.value })}
                ></textarea>
                <textarea
                    required
                    name="port5"
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

export default Row4;

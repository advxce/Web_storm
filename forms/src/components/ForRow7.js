import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function ForRow7({ number, name }) {
    const [value, setValue] = useState({
        title1: number,
        title2: name,
        title3: "",
        title4: "",
        title5: "",
    });

    return (


                <div className="ListForm">
                    <input
                        readOnly
                        name="num8"
                        type="text"
                        className="box number "
                        value={value.title1}
                    ></input>
                    <input
                        readOnly
                        type="text"
                        className="box event "
                        name="event8"
                        value={value.title2}
                    ></input>
                    <textarea
                        name="contact8"
                        className="box textbox contact form-control"
                        value={value.title3}
                        type="text"
                        onChange={(e) => setValue({ ...value, title3: e.target.value })}
                    ></textarea>
                    <textarea
                        name="title8"
                        className="box textbox title form-control"
                        value={value.title4}
                        type="text"
                        placeholder="XXX.XXX.XXX.XXX"
                        onChange={(e) => setValue({ ...value, title4: e.target.value })}
                    ></textarea>
                    <textarea
                        name="port8"
                        className="box textbox port form-control"
                        required
                        value={value.title5}
                        type="text"
                        placeholder="XXX.XXX.X.X"
                        onChange={(e) => setValue({ ...value, title5: e.target.value })}
                    ></textarea>
                </div>

    );
}

export default ForRow7;

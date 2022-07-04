import React from "react";
import { useState } from "react";
import "./UI_styles/Rows.css";

function Row3() {
    const [value, setValue] = useState([
        {
            title1: 3,
            title2:
                "  Определение перечня рабочих мест медработников для включения в пилотный проект 3DMeD",
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

    const [count, setCount] = useState(1);

    function counter() {
        setCount(count + 1);
        console.log(count);
    }

    function addRow(event) {
        event.preventDefault();

        counter();

        setValue([
            ...value,
            {
                title1: `3.${count}`,
                title2: `Наименование диагност. аппарата ${count}`,
                title3: "",
                title4: "",
                title5: "",
                id: Date.now(),
            },
        ]);
    }

    function removeRow(i) {
        let newRowValues = [...value];

        newRowValues.splice(i - 1, 1);
        setValue(newRowValues);

        setCount(1);
    }

    return (
        <div className="">
            {value.map((element, index) => (
                <div className="ListForm" key={index}>
                    <input
                        readOnly
                        type="text"
                        name="num4"
                        value={element.title1}
                        className="box number "
                    ></input>
                    <textarea
                        readOnly
                        type="text"
                        name="event4"
                        value={element.title2}
                        className="box event "

                    ></textarea>
                    <textarea
                        className="box textbox contact form-control"
                        value={value.title3}
                        type="text"
                        name="contact4"
                        onChange={(e) => handleChange(index, e)}
                    ></textarea>
                    <textarea
                        className="box textbox title form-control"
                        value={value.title4}
                        type="text"
                        name="title4"
                        placeholder="XXX.XXX.XXX.XXX"
                        onChange={(e) => handleChange(index, e)}
                    ></textarea>
                    <textarea
                        className=" textbox port form-control box"
                        value={value.title5}
                        type="text"
                        name="port4"
                        required
                        placeholder="XXX.XXX.X.X"
                        onChange={(e) => handleChange(index, e)}
                    ></textarea>
                    <button className="btn btn-outline-info" onClick={addRow}>
                        +
                    </button>
                    {element.title1 !== 3 ? (
                        <button
                            type="button"
                            className="btn btn-outline-info"
                            onClick={() => removeRow(element.title1 - 1)}
                        >
                            -
                        </button>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export default Row3;

import React from "react";
import "./UI_styles/Rows.css"

function Header({ number, event, contact, title, port }) {
    return (

            <div className="ListForm">
                <input
                    readOnly
                    type="text"
                    name="num1"
                    className="number box header-box"
                    value={number}
                ></input>
                <input
                    readOnly
                    type="text"
                    name="event1"
                    className="event box header-box"
                    value={event}
                ></input>
                <textarea
                    readOnly
                    type="text"
                    name="contact1"
                    className="contact box header-box"
                    value={contact}
                ></textarea>
                <input
                    readOnly
                    type="text"
                    name="title1"
                    className="title box header-box"
                    value={title}
                ></input>
                <input
                    readOnly
                    type="text"
                    name="port1"
                    className="port box header-box"
                    value={port}
                ></input>
            </div>

    );
}

export default Header;

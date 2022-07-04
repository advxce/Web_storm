import React from "react";

import "./UI_styles/Rows.css";
import emailjs from "emailjs-com";

function Email_form(props) {



    return (
        <div className="container popup-box">
            <div className="boxSize">
                <div className="sizeContainer">
                    <div className="close">
            <span className="close-icon" onClick={props.handleClose}>
              x
            </span>
                    </div>
                </div>
                <div className="box-for-email">
                    <label htmlFor="">Имя</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id=""
                        className="form-control box email-boxes"
                        style={{padding:"2%", background:"black"}}
                    />
                </div>
                <div className="box-for-email">
                    <label htmlFor="">email</label>
                    <input
                        required
                        type="email"
                        name="user_email"
                        id=""
                        className="form-control box email-boxes"
                        style={{padding:"2%"}}
                    />
                </div>
                <div className="box-for-email">
                    <label htmlFor="">Message</label>
                    <textarea
                        name="message"
                        id=""
                        cols="4"
                        rows="10"
                        className="form-control box "
                        style={{padding:"2%"}}
                    ></textarea>
                </div>

                <input
                    type="submit"

                    className="form-control btn btn-success for_submit_btn"
                    style={{ marginTop: "30px" }}
                    value="Отправить"
                />
            </div>
        </div>
    );
}

export default Email_form;
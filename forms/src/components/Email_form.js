import React, {useState} from "react";

import "./UI_styles/Rows.css";
import emailjs from "emailjs-com";

function Email_form(props) {

    const [value, setValue] = useState({
        name: "",
        surname: "",
        user_email: "",
        message: "",
    })

    function handleChange(e) {
        setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(value)
    }

    function check(e) {

        if (window.confirm("Отправить на почту")) {
            sendEmail(e);
            window.alert("Сообщение отправлено")
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_tcccvjr",
                "template_iws1v2t",
                e.target,
                "xVHRRtBc-eVswjurv"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    function checkButton(e) {

        if (value.name && value.surname && value.user_email !== "") {

            check(e)
        } else {
            alert("Заполните поля")

        }

    }

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

                <div className="box-for-form">
                    <label htmlFor="">Имя </label>
                    <input
                        required
                        type="text"
                        name="name"
                        id=""
                        value={value.name}
                        onChange={(e) => handleChange(e)}
                        className="form-control box email-boxes"
                        style={{padding: "2%", background: "black",color:"rgb(90, 202, 250)"}}
                    />
                    <div className="invalid-feedback">Заполните поле "Имя"</div>
                </div>
                <div className="box-for-form">
                    <label htmlFor="">Фамилия </label>
                    <input
                        required
                        type="text"
                        name="surname"
                        id=""
                        value={value.surname}
                        onChange={(e) => handleChange(e)}
                        className="form-control box email-boxes"
                        style={{padding: "2%", background: "black",color:"rgb(90, 202, 250)"}}
                    />
                    <div className="invalid-feedback">Заполните поле "Фамилия"</div>
                </div>
                <div className="box-for-form">
                    <label htmlFor="">Почта </label>
                    <input
                        required
                        type="email"
                        name="user_email"
                        id=""
                        value={value.user_email}
                        onChange={(e) => handleChange(e)}
                        className="form-control box email-boxes"
                        style={{padding: "2%", background: "black",color:"rgb(90, 202, 250)"}}
                    />
                    <div className="invalid-feedback">Заполните поле "Почта"</div>
                </div>
                <div className="box-for-form">
                    <label htmlFor="">Комментарий</label>
                    <textarea
                        className="form-control box email-boxes"
                        name="message"
                        id=""
                        cols="4"
                        rows="10"
                        value={value.message}
                        onChange={(e) => handleChange(e)}

                        style={{padding: "2%", background: "black",color:"rgb(90, 202, 250)",height:"16vmin"}}
                    ></textarea>
                </div>

                <input
                    type="button"
                    onClick={(e) => {
                        checkButton(e)
                    }}
                    className="form-control btn btn-success for_submit_btn"
                    style={{marginTop: "30px"}}
                    value="Отправить"
                />

            </div>

        </div>

    );
}

export default Email_form;
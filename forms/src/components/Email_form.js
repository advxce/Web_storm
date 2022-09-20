import React, {useRef, useState} from "react";
import "./styles/Email.css"
import emailjs from "emailjs-com";
import Cancel from "./images/cancel.png"
import Header from "./Header";
import {message} from "antd";


function Email_form(props) {

    const [value, setValue] = useState({
        user_name: "",
        user_surname: "",
        user_email: "",
        message: "",
    })

    const errorMessage = () => {
        message.error({
            content: 'Поле "Почта" заполнено неправильно',

        });
    };

    function handleChange(e) {
        setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(value)
    }

    function handleOnChange(email, e) {

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            checkButton(e)
        } else {
            errorMessage()
        }
    }

    function check(e) {

        if (window.confirm("Отправить на почту")) {
            sendEmail(e);
            window.alert("Сообщение отправлено")
        }
    }

    let current = document.getElementById("myForm")

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_tcccvjr",
                "template_0rqn0jb",
                current,
                "xVHRRtBc-eVswjurv"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));


    }

    const error = () => {
        message.error({
            content: 'Заполните все поля',

        });
    };

    function checkButton(e) {

        if (value.user_name && value.user_surname && value.user_email !== "") {

            check(e)
        } else {
            error()

        }

    }

    return (
        <div className="container pop--container">

            <div className="pop-outside--container">
                <div className="image--container">
                    <img
                        onClick={(e) => props.handleClose(e)}
                        src={Cancel}
                        className="close-icon"/>
                </div>

                <div className="box">
                    <p className="box-content">Опросник для подключения ПО 3DMeD</p>
                    <div className="box--container">
                        <div className="box-components">
                            <div className="box-field">
                                <p className="box--title">Имя : </p>
                                <input
                                    required
                                    className="input--title"
                                    type="text"
                                    name="user_name"
                                    value={value.user_name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="box-field">
                                <p className="box--title">Фамилия : </p>
                                <input
                                    className="input--title"
                                    type="text"
                                    name="user_surname"
                                    value={value.user_surname}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="box-field">
                                <p className="box--title">Почта : </p>
                                <input
                                    required
                                    className="input--title"
                                    type="email"
                                    name="user_email"
                                    value={value.user_email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div
                                className="comment-box "
                            >
                                <p className="comment-title">Комментарий : </p>
                                <textarea
                                    name="message"
                                    value={value.message}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="box-for-btn">

                                <input

                                    className="send-btn"
                                    type="button"
                                    value="Отправить"
                                    onClick={(e) => {
                                        handleOnChange(value.user_email, e)
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>

    );
}

export default Email_form;
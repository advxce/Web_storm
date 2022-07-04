import React from "react";
import emailjs from "emailjs-com";
import "./UI_styles/Rows.css";
import Header from "./Header";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";
import Row8 from "./Row8";
import Row9 from "./Row9";
import Row7 from "./Row7";
import { useState } from "react";
import Email_form from "./Email_form";

function Mailer() {

    function check(e){
        if(window.confirm("Отправить на почту"))
        {
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

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    (() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
            form.addEventListener(
                "submit",
                (event) => {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    })();

    return (
        <div className=" ">
            <div className=" Container ">
                <div className="ListContainer">
                    <form className="  needs-validation " noValidate onSubmit={check}>
                        <Header
                            number={"№"}
                            event={"Мероприятие"}
                            contact={"ответственный исполнитель, контакт"}
                            title={"AE Title"}
                            port={"Порт"}
                        ></Header>
                        <Row1 number={1}></Row1>
                        <Row2 number={2}></Row2>
                        <Row3 number={3}></Row3>
                        <Row4 number={4}></Row4>
                        <Row5 number={5}></Row5>
                        <Row6 number={6}></Row6>
                        <Row7 number={7}></Row7>
                        <Row8 number={8}></Row8>
                        <Row9 number={9}></Row9>
                        <div className="for_next_btn">
                            <input
                                type="button"
                                value="Далее"
                                className=" btn btn-primary"
                                onClick={togglePopup}
                            ></input>
                            {isOpen && <Email_form handleClose={togglePopup}></Email_form>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Mailer;

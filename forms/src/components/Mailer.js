import React, {useEffect} from "react";
import "./styles/Form.css"
import Header from "./Header";
import StaticRows from "./StaticRows";
import AETitle_Rows from "./AETitle_Rows";
import APM_Rows from "./APM_Rows";
import {useState} from "react";
import {message} from "antd";
import Email_form from "./Email_form";

import dataFile from "../dataFile";
import BoolRow from "./BoolRow";

function Mailer(props) {


    const [isOpen, setIsOpen] = useState("close");

    const togglePopup = (e) => {
        e.preventDefault();
        setIsOpen("close");

    };

    const [statePort, setStatePort] = useState(false)

    const error = () => {
        message.error({

            content: 'Заполните все поля',
            style: {
                position: "absolute",
                left: "34vw",
                width: "32%"
            },
            duration: 2

        });
    };
    const warning_port = () => {
        message.warning({
            content: 'Поле "Порт" должно содержать 12 символов',
            style: {
                position: "absolute",
                left: "34vw",
            },
            duration: 6

        });
    };

    const warning_Ip = () => {
        message.warning({
            content: 'Поле "IP" должно содержать 12 символов',
            style: {
                position: "absolute",
                left: "34vw",
            },
            duration: 8

        });
    };

    (() => {
        'use strict'


        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()

                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    const [part1, setPart1] = useState(dataFile.data.part1)
    const [part2, setPart2] = useState(dataFile.data.part2)


    const rows_part1 = part1.map((item, key) => {

        return <StaticRows
            key={key}
            name={item.name1}
            event={item.event}
            title={item.title}
            state={false}
        />
    })

    const rows_part2 = part2.map((item, key) => {

        return <StaticRows
            name={item.name1}
            key={key}
            event={item.event}
            title={item.title}
            state={false}
        />
    })

    const [ipAETitle, setIpAETitle] = useState(false)
    const [ipAPM, setIpAPM] = useState(false)

    const warningUpload = () => {
        if (!ipAETitle || !ipAPM) {
            warning_Ip()
        }
    }

    const warningPort = () => {
        if (!statePort) {
            warning_port()
        }
    }

    const errorMsg = () => {
        error()
    }

    console.log("ipARM"+ ipAPM)
    console.log("ipAETitle"+ ipAETitle)

    return (
        <div className="page">
            <div className="form--container--outside">
                <div className="form--container--inside">
                    <form
                        id="myForm"
                        className="  needs-validation"
                        noValidate
                        onSubmit
                            ={
                            (e) => {
                                e.preventDefault()
                                statePort ? setIsOpen("open") : setIsOpen("close")
                            }
                        }

                    >
                        <Header></Header>
                        <div className="main--container">
                            {rows_part1}
                            <p className="main--content">Определение перечня диагност аппаратов мед. учреждения для
                                включения в пилотный проект 3DMeD</p>
                            <AETitle_Rows
                                setIpAETitle={setIpAETitle}
                                portState={statePort}
                                setIsOpen={setIsOpen}
                                portStateFunc={setStatePort}
                            ></AETitle_Rows>
                            <p className="main--content">Определение перечня рабочих мест медработников для включения в
                                пилотный проект 3DMeD</p>
                            <APM_Rows
                                setIpAPM={setIpAPM}
                            />
                            <BoolRow/>
                            {rows_part2}

                            <input
                                type="submit"
                                value="Далее"
                                className="button-send"
                                onClick={(e) => {
                                    // error() &&

                                    warningUpload()
                                    warningPort()
                                    errorMsg()
                                }

                                }
                            ></input>
                            {isOpen === "open" && <Email_form handleClose={togglePopup}></Email_form>}
                        </div>
                        <footer>контактное лицо от ООО "КометаРад" Кудырко Андрей, 8-029-5600-700, e-mail: a.kudyrko@comrad.by</footer>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Mailer;

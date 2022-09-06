import React, {useEffect} from "react";
import "./UI_styles/Rows.css";
import Header from "./Header";
import StaticRows from "./StaticRows";
import DynamicRows from "./DynamicRows";
import {useState} from "react";
import Email_form from "./Email_form";

import dataFile from "../dataFile";
import BoolRow from "./BoolRow";

function Mailer() {


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (e) => {

        e.preventDefault();
        setIsOpen(!isOpen);

    };

    (() => {

        const forms = document.querySelectorAll(".needs-validation");


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
    })
    ();

    const [data, setData] = useState(dataFile)

    const [statePort, setStatePort] = useState(false)

    const rows = data.map((item, key) => {

        return <StaticRows
            portState={statePort}
            portStateFunc={setStatePort}
            key={key}
            event={item.event}
            contact={item.contact}
            title={item.title}
        />
    })

    const dynamicRows = {
        Row2: {
            mainName: "Определение перечня диагност аппаратов мед. учреждения  для включения в пилотный проект 3DMeD",
            sectionName: "Наименование диагност. аппарата"
        },
        Row3: {
            mainName: "Определение перечня рабочих мест медработников для включения в пилотный проект 3DMeD",
            sectionName: "Наименование диагност. аппарата"
        }
    }

    return (
        <div className=" ">
            <div className=" Container ">
                <div className="ListContainer">
                    <form className="  needs-validation " noValidate onSubmit={(e) => {
                        togglePopup(e)
                        !statePort ? setIsOpen(isOpen) : setIsOpen(!isOpen)
                    }}>
                        <Header
                            event={"Мероприятие"}
                            contact={"ответственный исполнитель, контакт"}
                            title={"AE Title"}
                            port={"Порт"}
                        ></Header>
                        {rows}
                        <DynamicRows
                            portState={statePort}
                            portStateFunc={setStatePort}
                            mainName={dynamicRows.Row2.mainName}
                            sectionName={dynamicRows.Row2.sectionName}></DynamicRows>
                        <DynamicRows
                            portState={statePort}
                            portStateFunc={setStatePort}
                            mainName={dynamicRows.Row3.mainName}
                            sectionName={dynamicRows.Row3.sectionName}></DynamicRows>
                        <BoolRow
                            portState={statePort}
                            portStateFunc={setStatePort}
                            event="Наличие / отсутствие серверов ПАКС клиники (модель ПАКС системы, емкость сервера)"
                            contact=""
                            title=""></BoolRow>
                        <div className="for_next_btn">
                            <input
                                type="submit"
                                value="Далее"
                                className=" btn btn-primary"
                            ></input>
                            {isOpen && <Email_form  handleClose={togglePopup}></Email_form>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Mailer;

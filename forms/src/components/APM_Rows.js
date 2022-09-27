import React, {useEffect} from 'react';
import {useState} from "react";
import "./styles/AETitle_Rows.css"
import "./styles/APM.css"
import Subtract from "./images/Subtract.png";
import Delete from "./images/Delete.png";

function ApmRows(props) {


    const [num, setNum] = useState(2)

    const [value, setValue] = useState(
        [{
            num: 1,
            surname: "",
            APM_ip1: "",
            APM_ip2: "",
            APM_ip3: "",
            APM_ip4: "",
            id: Date.now(),
        }],
    );


    let handleChange = (i, e) => {
        let newRowValues = [...value];
        newRowValues[i][e.target.name] = e.target.value;
        setValue(newRowValues);
    };

    function addRow(event) {
        setNum(prevState => prevState + 1)
        event.preventDefault();
        setValue(prev => [

                ...prev,
                {
                    num: num,
                    surname: "",
                    APM_ip1: "",
                    APM_ip2: "",
                    APM_ip3: "",
                    APM_ip4: "",
                    id: Date.now()
                }
            ]
        );


    }

    function removeRow(i) {
        let newRowValues = [...value];
        newRowValues.splice(i, 1);
        setValue(newRowValues);
        setNum(value.length)

    }

    const onInput = event => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '')
    }
    const [ip1, setIp1] = useState(false)
    const [ip2, setIp2] = useState(false)
    const [ip3, setIp3] = useState(false)
    const [ip4, setIp4] = useState(false)

    useEffect(()=>{
        if (ip1 && ip2 && ip3 && ip4) {
            props.setIpAPM(true)
        } else {
            props.setIpAPM(false)
        }
    },[ip1,ip2,ip3,ip4])


    const main = value.map((element, index) => {

        let ipString = element.APM_ip1 + "." + element.APM_ip2 + "." + element.APM_ip3+ "." + element.APM_ip4

        return (
            <div className="arm-inside--container" key={index}>


                <p className="apm-content">APM {element.num}</p>
                <div className="line"></div>
                <p className="surname-content">ФИО</p>
                <input
                    required
                    value={element.surname}
                    name="surname"
                    onChange={(e) => handleChange(index, e)}
                    className="input main--inputs surname-input"
                />
                <p className="title--content">IP :</p>
                <input
                    required
                    className="ip--input input"
                    onInput={onInput}
                    type="number"
                    name="APM_ip1"
                    value={element.APM_ip1}
                    onChange={(e) => {
                        e.target.value = e.target.value.substring(0, 3)
                        e.target.value.length < 3 ? setIp1(false) : setIp1(true)
                        handleChange(index, e)
                    }
                    }
                ></input>
                <div className="dot">.</div>
                <input
                    required
                    className="ip--input input"
                    name="APM_ip2"
                    onInput={onInput}
                    type="number"
                    value={element.APM_ip2}
                    onChange={(e) => {
                        e.target.value = e.target.value.substring(0, 3)
                        e.target.value.length < 3 ? setIp2(false) : setIp2(true)
                        handleChange(index, e)
                    }}
                ></input>
                <div className="dot">.</div>
                <input
                    required
                    className="ip--input input "
                    type="number"
                    onInput={onInput}
                    name="APM_ip3"
                    value={element.APM_ip3}
                    onChange={(e) => {
                        e.target.value = e.target.value.substring(0, 3)
                        e.target.value.length < 3 ? setIp3(false) : setIp3(true)
                        handleChange(index, e)
                    }}
                ></input>
                <div className="dot">.</div>
                <input
                    required
                    className="ip--input input main--inputs"
                    type="number"
                    onInput={onInput}
                    name="APM_ip4"
                    value={element.APM_ip4}
                    onChange={(e) => {
                        e.target.value = e.target.value.substring(0, 3)
                        e.target.value.length < 3 ? setIp4(false) : setIp4(true)
                        handleChange(index, e)
                    }}
                ></input>
                <input
                    onChange={(e) => {
                        e.target.value = ipString
                    }}
                    type="text"
                    className="hide-element"
                    name="PortAPM"
                    value={ipString}
                />

                {element.num === 1 &&
                    <img
                        src={Subtract}
                        onClick={addRow}
                        className="button-img"
                    />
                }
                {element.num !== 1 ? (
                    <img
                        src={Delete}
                        onClick={() => removeRow(index)}
                        className="button-img"
                    />
                ) : null}
            </div>
        )
    })


    return (
        <div className="apm-container">
            {main}
        </div>
    );

}

export default ApmRows;
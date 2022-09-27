import React, {useEffect} from "react";
import {useState} from "react";
import "./styles/AETitle_Rows.css"
import PortFunc from "./PortFunc";
import Subtract from "./images/Subtract.png"
import Delete from "./images/Delete.png"

function AETitle_Rows(props) {

    const [value, setValue] = useState(
        [{
            num: 2,
            title_AE: "",
            AE_ip1: "",
            AE_ip2: "",
            AE_ip3: "",
            AE_ip4:"",
            port: "",
            id: Date.now(),
        }],
    );

    let handleChange = (i, e) => {
        let newRowValues = [...value];
        newRowValues[i][e.target.name] = e.target.value;
        setValue(newRowValues);
    };

    function addRow(event) {
        event.preventDefault();
        setValue(prev => [

                ...prev,
                {
                    num: 3,
                    title_AE: "",
                    AE_ip1: "",
                    AE_ip2: "",
                    AE_ip3: "",
                    AE_ip4:"",
                    port: "",
                    id: Date.now()
                }
            ]
        );
    }

    function removeRow(i) {
        let newRowValues = [...value];
        newRowValues.splice(i, 1);
        setValue(newRowValues);
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
                props.setIpAETitle(true)
            } else {
                props.setIpAETitle(false)
            }
    },
        [ip1,ip2,ip3,ip4])


    return (
        <div className="title-main--container">
            {value.map((element, index) => {

                let ipString = element.AE_ip1 + "." + element.AE_ip2 + "." + element.AE_ip3 + "." + element.AE_ip4

                return (

                    <div className="title-inside--container" key={index}>

                        <p className="title--content">AETitle :</p>
                        <input
                            required
                            name="title_AE"
                            className="ae-input main--inputs input"
                            type="text"
                            value={element.title_AE}
                            onChange={(e) => handleChange(index, e)}
                        ></input>

                        <p className="title--content">IP :</p>
                        <input
                            required
                            onInput={onInput}
                            className="ip--input input"
                            type="number"
                            name="AE_ip1"
                            value={element.AE_ip1}
                            onChange={(e) => {
                                e.target.value = e.target.value.substring(0, 3)
                                e.target.value.length < 3 ? setIp1(false) : setIp1(true)

                                handleChange(index, e)
                            }}

                        ></input>
                        <div className="dot">.</div>
                        <input
                            required
                            onInput={onInput}
                            className="ip--input input"
                            type="number"
                            name="AE_ip2"
                            value={element.AE_ip2}
                            onChange={(e) => {
                                e.target.value = e.target.value.substring(0, 3)
                                e.target.value.length < 3 ? setIp2(false) : setIp2(true)
                                handleChange(index, e)


                            }}

                        ></input>
                        <div className="dot">.</div>
                        <input
                            required
                            onInput={onInput}
                            className="ip--input input"
                            type="number"
                            name="AE_ip3"
                            value={element.AE_ip3}
                            onChange={(e) => {
                                e.target.value = e.target.value.substring(0, 3)
                                e.target.value.length < 3 ? setIp3(false) : setIp3(true)
                                handleChange(index, e)

                            }}

                        ></input>
                        <div className="dot">.</div>
                        <input
                            required
                            onInput={onInput}
                            className="ip--input input main--inputs"
                            type="number"
                            name="AE_ip4"
                            value={element.AE_ip4}
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
                            name="PortTitle"
                            value={ipString}
                        />
                        <p className="title--content">Порт :</p>
                        <PortFunc
                            setIsOpen={props.setIsOpen}
                            portState={props.portState}
                            setPortState={props.portStateFunc}
                        ></PortFunc>
                        {element.num === 2 &&
                            <img
                                src={Subtract}
                                onClick={(e) => addRow(e)}
                                className="button-img"
                            />
                        }
                        {element.num !== 2 ? (
                            <img
                                src={Delete}
                                onClick={() => removeRow(index)}
                                className="button-img"
                            />
                        ) : null}
                    </div>

                )
            })
            }

        </div>
    );
}

export default AETitle_Rows;

import React, {useEffect, useState} from 'react';
import "./styles/AETitle_Rows.css"

function PortFunc(props) {

    function checkValid(name) {
        if (name.length < 15) {
            props.setPortState(false)
        } else {
            props.setPortState(true)
        }
    }

    const [name, setName] = useState({
        main_port: ""
    })

    function prettier(stroke) {
        stroke = stroke.substring(0, 12)
        let dot = stroke.match(/.{1,3}/g)
        let newString = ""
        if (stroke.length !== 0) {
            newString = dot.join(".")
        }
        checkValid(newString)
        setName(prevState => ({
            ...prevState, main_port: newString
        }))
    }


    const onInput = event => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '')
    }

    return (
        <input
            required
            value={name.main_port}
            name="main_port"
            onInput={onInput}
            onChange={(e) => {
                prettier(e.target.value)
            }}

            className="input main--inputs port--input "
        />
    );
}

export default PortFunc;
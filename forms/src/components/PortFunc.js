import React, {useEffect, useState} from 'react';
import "./styles/AETitle_Rows.css"

function PortFunc(props) {

    function checkValid(word) {
        if (word.length > 1) {
            props.setPortState(true)
        } else {
            props.setPortState(false)
        }
    }

    const [name, setName] = useState({
        main_port: ""
    })

    function prettier(stroke) {
        let newString = stroke.substring(0, 5)
        // let dot = stroke.match(/.{1,3}/g)
        // let newString = ""
        // if (stroke.length !== 0) {
        //     newString = dot.join(".")
        // }
        checkValid(newString)
        setName(prevState => ({
            ...prevState, main_port: newString
        }))
    }


    const onInput = event => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '')
    }

    console.log(name)
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
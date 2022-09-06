import React, {useEffect, useState} from 'react';


function PortFunc(props) {
    const [valuePort, setValuePort] = useState("")

    function checkPort(e) {
        let port = e.target.value
        port = port.substring(0, 16)
        let length = port.length
        let index = port.lastIndexOf(".") + 1
        let counterDots = port.split(".").length - 1
        let updatedPort = ""
        if (length !== index && counterDots < 3 && (length - index) % 3 === 0) {
            updatedPort = port + "."
        } else if (counterDots > 3 || length - index > 3) {
            let newString = port.substring(0, length - 1)
            updatedPort = newString
        } else {
            updatedPort = port

        }

        setValuePort(updatedPort)

    }

    function checkValid(name) {
        if (name !== "") {
            props.setPortState(true)
        } else if (name === "") {

            props.setPortState(false)
        }
    }

    return (
        <div className="port--container ">
            <input
                required
                className="box port form-control"
                type="text "
                name="port"
                value={valuePort}
                style={{
                    background: "black",
                    color: "rgb(90, 202, 250)",
                    width: "100%",
                    height: "100%",
                    padding: "0 0 0 5%"
                }}
                onChange={(e) => {
                    checkPort(e)
                    checkValid(e.target.value)

                }}


            />
            <div className="invalid-feedback" style={{textAlign:"left",marginLeft:"2%"}}>Заполните поле</div>


        </div>
    );
}

export default PortFunc;
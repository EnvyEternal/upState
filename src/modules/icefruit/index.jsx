import React, {useState} from 'react'

function IceFruit(props) {
    const {iceFruit} = props
    const {temperature} = props
    const [ice, setIce] = useState(iceFruit)
    const [temp, setTemp] = useState(temperature)
    return (
        <div>
            <div>{ice}</div>
            <div>{temp}</div>
        </div>
    )
}

export default IceFruit

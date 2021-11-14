import React, {useState} from 'react'

function IceFruit() {
    const [iceFruit, setIceFruit] = useState('')
    const [temperature, setTemperature] = useState(0)
    return (
        <div>
            <div>{iceFruit}</div>
            <div>{temperature}</div>
        </div>
    )
}

export default IceFruit

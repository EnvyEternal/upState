import React, {useState} from 'react'

function Tea() {
    const [temperature, setTemperature] = useState(0)
    const [sort, setSort] = useState('')
    return (
        <div>
            <div>{temperature}</div>
            <div>{sort}</div>
        </div>
    )
}

export default Tea

import React, {useState} from 'react'

function Tea(props) {
    const {temperature} = props
    const {sort} = props
    const [temp, setTemp] = useState(temperature)
    const [sortTea, setSort] = useState(sort)
    
    return (
        <div>
            <div>{temp}</div>
            <div>{sortTea}</div>
        </div>
    )
}

export default Tea

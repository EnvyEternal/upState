import React, {useState} from 'react'
import Tea from './tea'
import IceFruit from './icefruit'

function Container() {
    const [iceFruit, setIceFruit] = useState('Banana')
    const [temperature, setTemperature] = useState(0)
    const [sort, setSort] = useState('Ahmad')
    return (
        <div>
            <Tea temperature={temperature+90} sort={sort}/>
            <IceFruit temperature={temperature-30} iceFruit={iceFruit}/>
        </div>
    )
}

export default Container

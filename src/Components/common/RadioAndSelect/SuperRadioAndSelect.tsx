import React, { useState } from 'react'
import SuperSelect from './c5-SuperSelect/SuperSelect'
import SuperRadio from './c6-SuperRadio/SuperRadio'
import s from './SuperRadioAndSelect.module.css'


const arr = ['Krasnodar', 'Moscow', 'Vladimir', 'Armavir', 'Rostov']

function SuperRadioAndSelect() {

    const [value, onChangeOption] = useState(arr[1])

    return (
        <div className={s.items} >
            <div>
                <SuperSelect  options={arr}
                    value={value}
                    onChangeOption={onChangeOption} />
            </div>
            <div>
                <SuperRadio  name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption} />
            </div>
        </div>
    )
}

export default SuperRadioAndSelect
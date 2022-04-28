import React, {useState} from 'react'
import SuperRange from './c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

     const onChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    } 

    return (
        <div>
            <div>
                {/* <span>{value1}</span> */}
                <SuperRange value1={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <div>
                {/* <span>{value1}</span> */}
                {/* <SuperDoubleRange onChangeRange={onChangeRange} min={0} max={100} step={1} value={[value1, value2]} /> */}

                {/* <span>{value2}</span> */}
            </div>
        </div>
    )
}

export default HW11

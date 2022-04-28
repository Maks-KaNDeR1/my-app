import React from 'react'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number, 
    max: number, 
    step: number, 
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChange = (value: any) => {
        if (onChangeRange) {
            onChangeRange(value)
        }
    };

    return (
        <>
        
        
        
    <input
                type={'range'}
                onChange={onChange}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
      </>
    )
}

export default SuperDoubleRange

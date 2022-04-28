import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <form className={s.formRadio}  >
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    checked={o === value}
                    value={o}
                    onChange={onChangeCallback}
                // name, checked, value, onChange
                />
                <span>
                    {o}
                </span>
            </label>
        </form>

    )) : []

    return (
        <div className={s.radioBlock} >
            {mappedOptions}
        </div>
    )
}

export default SuperRadio

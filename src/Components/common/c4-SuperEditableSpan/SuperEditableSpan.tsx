import React, { DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState, KeyboardEvent, ChangeEvent } from 'react'
import SuperInputText from '../c1-SuperInputText/SuperInputText'
import s from './SuperEditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {}
    let [textEdit, setTextEdit] = useState('')

    let onChangeHandlerSpan = (e: ChangeEvent<HTMLInputElement>) => {
        setTextEdit(e.currentTarget.value)
    }

    const onEnterCallback = () => {
        // setEditMode() // выключить editMode при нажатии Enter
        // if (e.charCode === 13) {
        setEditMode(false)
        // }
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // setEditMode() // выключить editMode при нажатии за пределами инпута
        setEditMode(false)
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // setEditMode() // включить editMode при двойном клике
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${s.span} ${className}`

    return (
        <div className={s.item} >
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChange={onChangeHandlerSpan}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >{
                            textEdit ? textEdit : 'enter text...'
                        }
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        ✏️{children || restProps.value}
                    </span>
                )
            }
        </div>
    )
}

export default SuperEditableSpan

import React, { ChangeEvent, useState } from 'react'
import SuperInputText from '../common/c1-SuperInputText/SuperInputText'
import SuperButton from '../common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../common/c3-SuperCheckbox/SuperCheckbox'
import SuperEditableSpan from '../common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperRadioAndSelect from '../common/RadioAndSelect/SuperRadioAndSelect'
import RangeAndDoubleRange from '../common/RangeAndDoubleRange/RangeAndDoubleRange'
import style from './Test.module.css'



function Test() {

  let [text, setText] = useState('')

  let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }



  return (
    <div className={style.myComponentBlock} >
      <div>  <SuperInputText onChange={onChangeHandler} />  <div>
        {
          text ? text : '-----'
        }
      </div>
        <hr />
        <div>   <SuperButton> onCklick</SuperButton>   </div>
        <hr />
        <div >   <SuperCheckbox />  </div>
        <hr />
        <div>   <SuperEditableSpan />  </div>
        <hr />
        <div  >    <SuperRadioAndSelect />  </div>
        <hr />
        <div>  <RangeAndDoubleRange />  </div>
      </div>
    </div>


  )
}

export default Test
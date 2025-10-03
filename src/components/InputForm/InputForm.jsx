import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const { valueInput, setValueInput } = useState('')
    const { placeholder = 'Nhập text', ...rests } = props
    return (
        <>
            <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
            {/* <span>Ẩn</span>
            <span>Hiện</span> */}
        </>
    )
}

export default InputForm
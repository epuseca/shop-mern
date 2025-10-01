import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavbarComponent = () => {
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    return <WrapperTextValue key={index}>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return <Checkbox.Group style={{ width: '100%', flexDirection: 'column', gap: '12px' }} onChange={onChange} >
                    {options.map((option, index) => {
                        return (
                            <Checkbox style={{ marginLeft: '0px' }} value={option.value} key={index}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            case 'star':
                return options.map((option, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}  >
                            <Rate style={{ fontSize: '12px' }} key={index} disabled defaultValue={option} />
                            <span>{`Tu ${option} sao`}</span>
                        </div>

                    )
                })
            case 'price':
                return options.map((option, index) => {
                    return (
                        <WrapperTextPrice key={index} >
                            <span>{option}</span>
                        </WrapperTextPrice>

                    )
                })
            default:
                return {}
        }
    }
    return (
        <div >
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'May giat'])}
            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('checkbox', [
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [5,4,3])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['dưới 40', 'lên 50.000'])}
            </WrapperContent> */}
        </div>
    )
}

export default NavbarComponent
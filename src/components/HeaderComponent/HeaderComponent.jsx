import { Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { Input, Space } from 'antd';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;
const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>
                        Shop Epu
                    </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        // onSearch={onSearch}
                        enterButton
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản <CaretDownOutlined /></WrapperTextHeaderSmall>
                            </div>
                        </div>

                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
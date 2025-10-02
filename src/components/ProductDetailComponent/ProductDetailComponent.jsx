import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageSmall from '../../assets/images/imagesmall1.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style'
const ProductDetailComponent = () => {
    return (
        <Row style={{ padding: '16px', background: '#fff' }}>
            <Col span={10}>
                <Image src={imageProduct} alt='img product' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4} >
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageSmall} alt='img small' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14}>
                Col-12
            </Col>
        </Row>
    )
}

export default ProductDetailComponent
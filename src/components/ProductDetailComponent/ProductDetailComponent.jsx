import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import imageProduct from '../../assets/images/test.webp'
import imageSmall from '../../assets/images/imagesmall1.webp'
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProductDetailComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
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
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>Combo 4 Cuốn: Bộ Tuyển Tập Truyện Hay Dành Cho Thiếu Nhi (Tái Bản)</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        200.000d
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className='address'>Q. Bắc Từ Liêm, P. Phúc Diễn, Hà Nội </span>
                    - <span className='change-address'>Đổi</span>
                </WrapperAddressProduct>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '6px' }}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} size='10' />
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} />
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} size='10' />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent
                        border={false}
                        size={40}
                        styleButton={{ background: 'red', height: '48px', width: '220px', borderRadius: '4px' }}
                        textButton='Chọn mua'
                        styleTextButton={{ color: 'white', fontSize: '15px', fontWeight: '700' }}>
                    </ButtonComponent>
                    <ButtonComponent
                        border={false}
                        size={40}
                        styleButton={{ background: 'white', height: '48px', width: '220px', border: '1px solid rgb(13,92,182)', borderRadius: '4px' }}
                        textButton='Mua trả sau'
                        styleTextButton={{ color: 'rgb(13,92,182)', fontSize: '15px' }}>
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent
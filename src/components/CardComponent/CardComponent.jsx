import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            headStyle={{ width: '200px', height: '200px' }}
            bodyStyle={{ padding: '10px' }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <img alt='logo' src={logo} preview={false} style={{ width: '68px', height: '14px', position: 'absolute', top: '-1px', left: '-1px', borderTopLeftRadius: '3px'}} />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.96</span>
                    <StarFilled style={{ fontSize: '12px', color: 'orange' }} />
                </span>
                <span> | Đã bán 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>19.000.000 VND <WrapperDiscountText>-5%</WrapperDiscountText></WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
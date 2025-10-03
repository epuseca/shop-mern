import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image, index) => {
                return (
                    <Image key={index} src={image} alt='slider' preview={false} width='100%' height='274px' />
                )
            })}
        </WrapperSliderStyle>
    )
}

export default SliderComponent
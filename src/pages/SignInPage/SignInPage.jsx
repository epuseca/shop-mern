import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Divider, Image } from 'antd'
import imageSignin from '../../assets/images/signin.png'

const SignInPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ display: 'flex', width: '800px', height: '445px', borderRadius: '6px', background: '#fff' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' />
          <InputForm placeholder='password'/>
          <ButtonComponent
            border={false}
            size={40}
            styleButton={{ background: 'red', height: '48px', width: '100%', borderRadius: '4px', marginTop: '26px', marginBottom: '10px' }}
            textButton='Đăng nhập'
            styleTextButton={{ color: 'white', fontSize: '15px', fontWeight: '700' }}>
          </ButtonComponent>
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageSignin} preview={false} alt='image-logo-signin' height='202px' width='202px' />
          <h4>Mua sắm tại đây</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/logo.svg"/>
                <SignUp>최신 소식 받기</SignUp>
                <DescriptionOne>
                11월 12일 스트리밍 시작. 
                </DescriptionOne>
                <DescriptionTwo>
                월 9,900원 또는 연 99,000원으로
                디즈니+ 콘텐츠를 즐겨보세요
                </DescriptionTwo>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 17px 0;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
    width: 80%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;    
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }

`

const DescriptionOne = styled.p`
    font-size: 40px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: -30px;
`

const DescriptionTwo = styled.p`
    font-size: 40px;
    letter-spacing: 1px;
    text-align: center;
`

const CTALogoTwo = styled.img`
    width: 90%;
`
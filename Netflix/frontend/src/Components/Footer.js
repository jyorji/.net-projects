import React from 'react'
import styled from 'styled-components'

function Footer() {

    return (
        <Container>
            <Logo src='/images/logo.svg' />
            <Content>
                © Disney. All Rights Reserved.
            </Content>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 150px;
    padding-top:50px;
    padding-bottom: 50px;
    background: #090b13;
    display: grid;
    justify-items: center;
    font-size: 12px;
`
const Logo = styled.img`
    width: 80px;
`

const Content = styled.span`

`
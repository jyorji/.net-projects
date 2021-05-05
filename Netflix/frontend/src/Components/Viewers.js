import React from 'react'
import styled from 'styled-components'

function Viewrs() {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-disney.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/disney-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-pixar.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/pixar-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-marvel.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/marvel-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-starwars.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/starwars-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-national.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/national-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-star.png' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/star-video.mp4' type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewrs

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(6, minmax(0,1fr));
    grid-gap: 25px;

`
const Wrap = styled.div`
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        inset: 0px;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top:0;
        cursor: pointer;

    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scaleX(1.04);
        border-color: rgba(249, 249, 249, 0.8);

        video{
            opacity: 1;
        }
    }

`
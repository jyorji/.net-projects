import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

function Movies() {

    const history = useHistory()
    let RedirectTo = e => {
        history.push("/Detail");
    }
    return (

        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src='/images/movie-pic.jfif' alt='' onClick={RedirectTo} />
                </Wrap>
                <Wrap>
                    <img src='/images/movie-pic.jfif' alt='' onClick={RedirectTo} />
                </Wrap>
                <Wrap>
                    <img src='/images/movie-pic.jfif' alt='' onClick={RedirectTo} />
                </Wrap>
                <Wrap>
                    <img src='/images/movie-pic.jfif' alt='' onClick={RedirectTo} />
                </Wrap>
                <Wrap>
                    <img src='/images/movie-pic.jfif' alt='' onClick={RedirectTo} />
                </Wrap>
            </Content>
        </Container>

    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    overflow: hidden;
    grid-template-columns: repeat(5, minmax(0,1fr));

`
const Wrap = styled.div`
    border-radius: 8px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    img{
        width: 100%;
        height: 100%;
        object-fir: cover;
    }

    &:hover{
        transform: scale(1.01);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        border-radius: 8px;
    }

`
import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { getMovies } from "../service/getMovies";

function Movies() {

    const [res, setRes] = useState([])
    useEffect(() => {
        let mounted = true
        getMovies()
            .then((result) => {
                if (mounted) {
                    setRes(result)
                    console.log(result)
                }
            })
        return () => mounted = false
    }, [])

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {res && res.map((card) =>
                (
                    <Wrap key={card.movieId}>
                        <Link to={`/detail/${card.movieId}`}>
                            <img src={card.cardImg} alt='' />
                        </Link>
                    </Wrap>
                )
                )}

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
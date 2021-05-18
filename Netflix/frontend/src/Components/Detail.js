import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getMovieById } from "../service/getMovieById"

const Detail = (props) => {
    const { movieId } = useParams();
    const [res, setRes] = useState([])
    useEffect(() => {
        let mounted = true
        //console.log(movieId)
        getMovieById(movieId)
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
            {
                (
                    <>
                        <Background>
                            <img src={res.backgroundImg} alt='' />
                        </Background>
                        <ImageTitle>
                            <img src={res.titleImg} alt='' />
                        </ImageTitle>
                        <Controls>
                            <PlayButton>
                                <img src='/images/play-icon-black.png' alt='' />
                                <span>PLAY</span>
                            </PlayButton>
                            <TrailerButton>
                                <img src='/images/play-icon-white.png' alt='' />
                                <span>TRAILER</span>
                            </TrailerButton>
                            <AddButton>
                                +
                </AddButton>
                            <GroupWatchButton>
                                <img src='/images/group-icon.png' alt='' />
                            </GroupWatchButton>
                        </Controls>
                        <SubTitle>
                            {res.subTitle}
                        </SubTitle>
                        <Description>
                            {res.description}
                        </Description>
                    </>
                )
            }
        </Container>
    )
}

export default Detail

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 24px);
    position: relative;
    overflow: hidden;
    display: block;
    top: 135px;

    
`
const Background = styled.div`
    left:0px;
    opacity: 0.5;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`
const ImageTitle = styled.div`
    height: 38vh;
    min-height: 170px;
    width: 36vw;
    max-width: 600px;
    min-width: 200px;
    
    img{
        height: 100%;
        object-fit: cover;
    }
`
const Controls = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding-bottom: 4px;
    margin-right: 16px;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 30px;
    color: white;
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 850px;

`